import { CobrancaRemocaoDTO } from './../../core/models/cobranca-remocao.dto';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Projeto } from './../../core/models/projeto.model';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { Categoria } from './../../core/models/categoria.model';
import { Conta } from './../../core/models/conta.model';
import { Cobranca } from './../../core/models/cobranca.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { ProjetoService } from './../../core/services/projeto.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { ContaService } from './../../core/services/conta.service';
import { CobrancaService } from './../../core/services/cobranca.service';

@Component({
  selector: 'app-remover-cobranca',
  templateUrl: './remover-cobranca.page.html',
  styleUrls: ['./remover-cobranca.page.scss'],
})
export class RemoverCobrancaPage implements OnInit {

  cobrancaForm: FormGroup;
  cobranca: Cobranca;

  contas: Conta[] = [];
  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];
  projetos: Projeto[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private cobrancaService: CobrancaService,
    private contaService: ContaService,
    private categoriaService: CategoriaService,
    private projetoService: ProjetoService,
    private toast: MensagemToastService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  onCategoriaChange(event: any): void {
    if (this.categoria.value !== null && this.categoria.value !== ''){
      const categoriaId: number = this.categoria.value;

      this.categoriaService.getSubcategorias(categoriaId).subscribe((dados: Subcategoria[]) => {
        this.subcategorias = dados;

        if (dados.length === 0){
          this.toast.showErrorToast('Não há nenhuma subcategoria para esta categoria');
          this.subcategoria.disable();
        } else {
          this.subcategoria.enable();
        }
      });
    }
  }

  removerCobranca(): void {
    const cobranca: CobrancaRemocaoDTO = {
      cobranca: this.cobranca,
      conta: this.contas.find((c: Conta) => c.id === this.conta.value),
      categoria: this.categorias.find((c: Categoria) => c.id === this.categoria.value),
      subcategoria: this.subcategorias.find((s: Subcategoria) => s.id === this.subcategoria.value),
      projeto: this.projetos.find((p: Projeto) => p.id === this.projeto.value)
    };

    this.cobrancaService.delete(cobranca).subscribe(() => {
      this.toast.showSuccessToast('Cobrança removida');
      this.navController.navigateForward(`/cobrancas`);
    });
  }

  private loadData(event: any = null): void {
    // Carrega os dados da cobrança
    const cobrancaId: number = this.activatedRoute.snapshot.params['id'];

    this.cobrancaService.getById(cobrancaId).subscribe((dados: Cobranca) => {
      this.cobranca = dados;

      this.descricao.setValue(dados.descricao);
      this.saldo.setValue(Cobranca.getValorPago(dados));
    });

    // Carrega outros dados
    this.contaService.getAll().subscribe((dados: Conta[]) => this.contas = dados);
    this.categoriaService.getAll().subscribe((dados: Categoria[]) => this.categorias = dados);
    this.projetoService.getAll().subscribe((dados: Projeto[]) => {
      this.projetos = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  private initForm(): void {
    this.cobrancaForm = this.fb.group({
      descricao: ['', Validators.required],
      conta: ['', Validators.required],
      saldo: ['', Validators.required],
      categoria: [''],
      subcategoria: [{value: '', disabled: true}],
      projeto: [''],
    });
  }

  get descricao() { return this.cobrancaForm.get('descricao'); }
  get conta() { return this.cobrancaForm.get('conta'); }
  get saldo() { return this.cobrancaForm.get('saldo'); }
  get categoria() { return this.cobrancaForm.get('categoria'); }
  get subcategoria() { return this.cobrancaForm.get('subcategoria'); }
  get projeto() { return this.cobrancaForm.get('projeto'); }


}
