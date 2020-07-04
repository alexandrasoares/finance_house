import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../core/services/data.service';
import { LoadingService } from './../../core/services/loading.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CartaoService } from './../../core/services/cartao.service';
import { ProjetoService } from './../../core/services/projeto.service';
import { SubcategoriaService } from './../../core/services/subcategoria.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { ContaService } from './../../core/services/conta.service';
import { MovimentoService } from './../../core/services/movimento.service';
import { Fatura } from './../../core/models/fatura.model';
import { Cartao } from './../../core/models/cartao.model';
import { Projeto } from './../../core/models/projeto.model';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { Categoria } from './../../core/models/categoria.model';
import { Conta } from './../../core/models/conta.model';
import { Movimento, STATUS } from './../../core/models/movimento.model';

@Component({
  selector: 'app-editar-movimentos',
  templateUrl: './editar-movimentos.page.html',
  styleUrls: ['./editar-movimentos.page.scss'],
})
export class EditarMovimentosPage implements OnInit {

  movimentoForm: FormGroup;
  movimento: Movimento;

  statusList: { label: string, value: any }[] = STATUS;
  contas: Conta[] = [];
  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];
  projetos: Projeto[] = [];
  cartoes: Cartao[] = [];
  faturas: Fatura[] = [];

  constructor(
    private fb: FormBuilder,
    private movimentoService: MovimentoService,
    private contaService: ContaService,
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService,
    private projetoService: ProjetoService,
    private cartaoCreditoService: CartaoService,
    private activatedRoute: ActivatedRoute,
    private toast: MensagemToastService,
    private loading: LoadingService
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

   // Atualiza os dados de um movimento

   atualizar(): void {
    this.movimento.descricao = this.descricao.value;
    this.movimento.tipo = this.isCreditoMovimento() ? 'C' : 'D';
    this.movimento.dataContabilizacao = DataService.toApiPattern(this.dataContabilizacao.value);
    this.movimento.valor = this.valor.value;
    this.movimento.acrescimo = 0;
    this.movimento.decrescimo = 0;
    this.movimento.status = this.status.value;
    this.movimento.observacao = this.obs.value;
    this.movimento.conta = this.hasCartaoCredito() ? null : this.contas.find((c: Conta) => c.id === this.conta.value),
    this.movimento.categoria = this.categorias.find((c: Categoria) => c.id === this.categoria.value);
    this.movimento.subcategoria = this.subcategorias.find((s: Subcategoria) => s.id === this.subcategoria.value),
    this.movimento.projeto = this.projetos.find((p: Projeto) => p.id === this.projeto.value),
    this.movimento.fatura =  this.hasCartaoCredito() ? this.faturas.find((f: Fatura) => f.id === this.fatura.value) : null;

    this.loading.showLoading('Processando..');

    this.movimentoService.update(this.movimento).subscribe(() => {
      this.loading.dismissLoading();
      this.toast.showSuccessToast('Movimento atualizado');
    });
  }

  isCreditoMovimento(): boolean {
    return this.credito.value;
  }

  onDataContabilizacaoChanges(): void {
    const dataContabilizacao: string = this.dataContabilizacao.value;
    let novoStatus = '';

    if (DataService.isFuturo(dataContabilizacao)){
      novoStatus = Movimento.getStatusValueByLabel('Agendado');
    } else if (DataService.isPassado(dataContabilizacao)){
      novoStatus = Movimento.getStatusValueByLabel('Efetivado');
    } else {
      novoStatus = Movimento.getStatusValueByLabel('Pendente');
    }

    this.status.setValue(novoStatus);
  }

  onCreditoChange(): void {
    const tipo: string = this.isCreditoMovimento() ? 'C' : 'D';

    this.categoria.setValue('');
    this.subcategoria.setValue('');
    this.subcategoria.disable();

    this.categoriaService.getAllByTipo(tipo).subscribe((dados: Categoria[]) => {
      this.categorias = dados;

      if (dados.length === 0){
        this.toast.showErrorToast('Nenhuma categoria cadastrada para este tipo de movimento');
      }
    });
  }

  onCategoriaChange(): void {
    if (this.categoria.value !== ''){
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

  onCartaoChange(): void {
    if (this.hasCartaoCredito()){
      const cartaoId: number = this.cartao.value;

      this.fatura.enable();

      this.cartaoCreditoService.getFaturas(cartaoId).subscribe((dados: Fatura[]) => {
        this.faturas = dados.filter((fatura: Fatura) => fatura.status === 'NAO_FECHADA');

        // Pre-seleção de fatura
        if (this.faturas.length > 0) {
          this.fatura.setValue(this.faturas[0].id);
        } else {
          // Caso não exista faturas relacionadas ao cartão: limpa e bloqueia o campo
          this.fatura.setValue('');
          this.fatura.disable();
        }
      });

      // Limpa e desabilita o campo 'Conta'
      this.conta.setValue('');
      this.conta.disable();

      // Altera o status p/ 'Efetivado'
      this.status.setValue(Movimento.getStatusValueByLabel('Efetivado'));
      this.status.disable();
    } else {
      this.conta.enable();
      this.status.enable();
      this.fatura.disable();
    }
  }

  hasCartaoCredito(): boolean {
    return this.cartao.value !== null && this.cartao.value !== '';
  }

  resetForm(): void {
    this.movimentoForm.reset();
  }

  getMaxDate(): string {
    return DataService.getDatePickerMaxDate();
  }

  private loadData(event: any = null): void {
    const movimentoId: number = this.activatedRoute.snapshot.params['id'];

    this.loading.showLoading('Recuperando dados..');

    this.movimentoService.getById(movimentoId).subscribe((dados: Movimento) => {
      this.movimento = dados;
      this.loadForm(dados);

      this.loading.dismissLoading();
    });

    this.contaService.getAll().subscribe((dados: Conta[]) => this.contas = dados);
    this.categoriaService.getAll().subscribe((dados: Categoria[]) => this.categorias = dados);
    this.subcategoriaService.getAll().subscribe((dados: Subcategoria[]) => this.subcategorias = dados);
    this.cartaoCreditoService.getAll().subscribe((dados: Cartao[]) => this.cartoes = dados);
    this.projetoService.getAll().subscribe((dados: Projeto[]) => {
      this.projetos = dados;

      if (event !== null) {
        event.target.compconste();
      }
    });
  }

  private loadForm(movimento: Movimento): void {
    const conta = (movimento.conta !== null) ? movimento.conta.id : '';
    const categoria = (movimento.categoria !== null) ? movimento.categoria.id : '';
    const subcategoria = (movimento.subcategoria !== null) ? movimento.subcategoria.id : '';
    const cartao = (movimento.fatura !== null) ? movimento.fatura.cartao.id : '';
    const fatura = (movimento.fatura !== null) ? movimento.fatura.id : '';
    const projeto = (movimento.projeto !== null) ? movimento.projeto.id : '';

    this.descricao.setValue(movimento.descricao);
    this.credito.setValue(Movimento.isCredito(movimento));
    this.dataInclusao.setValue(movimento.dataInclusao);
    this.dataContabilizacao.setValue(DataService.convertApiPatternToJson(movimento.dataContabilizacao));
    this.valor.setValue(movimento.valor);
    this.status.setValue(movimento.status);
    this.conta.setValue(conta);
    this.categoria.setValue(categoria);
    this.subcategoria.setValue(subcategoria);
    this.cartao.setValue(cartao);
    this.fatura.setValue(fatura);
    this.projeto.setValue(projeto);
    this.obs.setValue(movimento.observacao);
  }

  private initForm(): void {
    this.movimentoForm = this.fb.group({
      descricao: ['', Validators.required],
      credito: [false, Validators.required],
      dataInclusao: [{ value: '', disabled: true }],
      dataContabilizacao: ['', Validators.required],
      valor: ['', Validators.required],
      status: ['', Validators.required],
      conta: [''],
      categoria: [''],
      subcategoria: [''],
      cartao: [''],
      fatura: [''],
      projeto: [''],
      obs: ['']
    });
  }

  get descricao() { return this.movimentoForm.get('descricao'); }
  get credito() { return this.movimentoForm.get('credito'); }
  get dataInclusao() { return this.movimentoForm.get('dataInclusao'); }
  get dataContabilizacao() { return this.movimentoForm.get('dataContabilizacao'); }
  get valor() { return this.movimentoForm.get('valor'); }
  get status() { return this.movimentoForm.get('status'); }
  get conta() { return this.movimentoForm.get('conta'); }
  get categoria() { return this.movimentoForm.get('categoria'); }
  get subcategoria() { return this.movimentoForm.get('subcategoria'); }
  get cartao() { return this.movimentoForm.get('cartao'); }
  get fatura() { return this.movimentoForm.get('fatura'); }
  get projeto() { return this.movimentoForm.get('projeto'); }
  get obs() { return this.movimentoForm.get('obs'); }

}
