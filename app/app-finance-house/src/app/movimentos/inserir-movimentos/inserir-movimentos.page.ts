import { TipoConta } from './../../core/models/tipo-conta.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Movimento } from './../../core/models/movimento.model';
import { DataService } from './../../core/services/data.service';
import { MovimentoDTO } from './../../core/models/movimento.dto';
import { CartaoService } from './../../core/services/cartao.service';
import { ProjetoService } from './../../core/services/projeto.service';
import { LoadingService } from './../../core/services/loading.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { ContaService } from './../../core/services/conta.service';
import { MovimentoService } from './../../core/services/movimento.service';
import { Fatura } from './../../core/models/fatura.model';
import { Cartao } from './../../core/models/cartao.model';
import { Projeto } from './../../core/models/projeto.model';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { Categoria } from './../../core/models/categoria.model';
import { Conta } from './../../core/models/conta.model';
import { STATUS } from '../../core/models/movimento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-movimentos',
  templateUrl: './inserir-movimentos.page.html',
  styleUrls: ['./inserir-movimentos.page.scss'],
})
export class InserirMovimentosPage implements OnInit {

  movimentoForm: FormGroup;

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
    private projetoService: ProjetoService,
    private cartaoCreditoService: CartaoService,
    private toast: MensagemToastService,
    private loading: LoadingService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  inserir(): void {
    const movimento: MovimentoDTO = {
      descricao: this.descricao.value,
      tipo: this.isCreditoMovimento() ? 'C' : 'D',
      dataContabilizacao: DataService.toApiPattern(this.dataContabilizacao.value),
      valor: this.valor.value,
      contribuinte: this.contribuinte.value,
      acrescimo: 0,
      decrescimo: 0,
      status: this.status.value,
      observacao: this.obs.value,
      // conta: this.hasCartaoCredito() ? null : this.contas.find((c: Conta) => c.id === this.conta.value),
      // categoria: this.categorias.find((c: Categoria) => c.id === this.categoria.value),
      // subcategoria: this.subcategorias.find((s: Subcategoria) => s.id === this.subcategoria.value),
      // projeto: this.projetos.find((p: Projeto) => p.id === this.projeto.value),
      // fatura: this.hasCartaoCredito() ? this.faturas.find((f: Fatura) => f.id === this.fatura.value) : null
    };

    this.movimentoService.insert(movimento).subscribe(() => {
      // this.loading.dismissLoading();
      this.router.navigate(['/movimentos'], { replaceUrl: true });
      this.toast.showSuccessToast('Movimento inserido com sucesso');
      this.resetForm();
    });
  }

  isCreditoMovimento(): boolean {
    return this.credito.value;
  }

  onDataContabilizacaoChanges(): void {
    const dataContabilizacao: string = this.dataContabilizacao.value;
    let novoStatus = '';

    if (DataService.isFuturo(dataContabilizacao)) {
      novoStatus = Movimento.getStatusValueByLabel('Agendado');
    } else if (DataService.isPassado(dataContabilizacao)) {
      novoStatus = Movimento.getStatusValueByLabel('Efetivado');
    } else {
      novoStatus = Movimento.getStatusValueByLabel('Pendente');
    }

    this.status.setValue(novoStatus);
  }

  /**
   * Evento disparado quando o tipo de movimento (campo Crédito) é alterado
   * @param event;
   */

  onCreditoChange(): void {
    const tipo: string = this.isCreditoMovimento() ? 'C' : 'D';

    // this.categoria.setValue('');
    // this.subcategoria.setValue('');
    // this.subcategoria.disable();

    // this.categoriaService.getAllByTipo(tipo).subscribe((dados: Categoria[]) => {
    //   this.categorias = dados;

    //   if (dados.length === 0) {
    //     this.toast.showErrorToast('Nenhuma categoria cadastrada para este tipo de movimento');
    //   }
    // });
  }

  /**
   * Evento disparado quando o valor do campo Categoria é alterado
   * @param event;
   */

  // onCategoriaChange(): void {
  //   if (this.categoria.value !== null && this.categoria.value !== '') {
  //     const categoriaId: number = this.categoria.value;

  //     this.categoriaService.getSubcategorias(categoriaId).subscribe((dados: Subcategoria[]) => {
  //       this.subcategorias = dados;

  //       if (dados.length === 0) {
  //         this.toast.showErrorToast('Não há nenhuma subcategoria para esta categoria');
  //         this.subcategoria.disable();
  //       } else {
  //         this.subcategoria.enable();
  //       }
  //     });
  //   }
  // }

  // onCartaoChange(): void {
  //   if (this.hasCartaoCredito()) {
  //     const cartaoId: number = this.cartao.value;

  //     this.fatura.enable();

  //     this.cartaoCreditoService.getFaturas(cartaoId).subscribe((dados: Fatura[]) => {
  //       this.faturas = dados.filter((fatura: Fatura) => fatura.status === 'NAO_FECHADA');

  //       // Pre-seleção de fatura
  //       if (this.faturas.length > 0) {
  //         this.fatura.setValue(this.faturas[0].id);
  //       } else {
  //         // Caso não exista faturas relacionadas ao cartão: limpa e bloqueia o campo
  //         this.fatura.setValue('');
  //         this.fatura.disable();
  //       }
  //     });

  //     // Limpa e desabilita o campo 'Conta'
  //     this.conta.setValue('');
  //     this.conta.disable();

  //     // Altera o status p/ 'Efetivado'
  //     this.status.setValue(Movimento.getStatusValueByLabel('Efetivado'));
  //     this.status.disable();
  //   } else {
  //     this.conta.enable();
  //     this.status.enable();
  //     this.fatura.disable();
  //   }
  // }

  // hasCartaoCredito(): boolean {
  //   return this.cartao.value !== null && this.cartao.value !== '';
  // }

  resetForm(): void {
    this.movimentoForm.reset({
      credito: false,
      dataContabilizacao: DataService.getNowAsJson(),
      status: Movimento.getStatusValueByLabel('Pendente')
    });
  }

  getMaxDate(): string {
    return DataService.getDatePickerMaxDate();
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  adicionarContribuinte(tipoConta: TipoConta): void {
    // this.editarTipoContaEvent.emit(tipoConta);
  }

  // showCartaoCreditoModal(): void {

  // }

  /**
   * Carrega os dados (contas, categorias, cartões, etc.)
   * @param event;
   */

  private loadData(event: any = null): void {
    this.contaService.getAll().subscribe((dados: Conta[]) => this.contas = dados);
    // this.categoriaService.getAllByTipo('D').subscribe((dados: Categoria[]) => this.categorias = dados);
    // this.subcategoriaService.getAll().subscribe((dados: Subcategoria[]) => this.subcategorias = dados);
    this.cartaoCreditoService.getAll().subscribe((dados: Cartao[]) => this.cartoes = dados);
    this.projetoService.getAll().subscribe((dados: Projeto[]) => {
      this.projetos = dados.filter((p: Projeto) => Projeto.isEmAndamento(p));

      if (event !== null) {
        event.target.complete();
      }
    });
  }

  private initForm(): void {
    const defaultStatus = Movimento.getStatusValueByLabel('Pendente');

    this.movimentoForm = this.fb.group({
      descricao: ['', Validators.required],
      credito: [false, Validators.required],
      dataContabilizacao: [DataService.getNowAsJson(), Validators.required],
      valor: ['', Validators.required],
      contribuinte: ['', Validators.required],
      status: [defaultStatus, Validators.required],
      conta: [''],
      categoria: [''],
      subcategoria: [{ value: '', disabled: true }],
      cartao: [''],
      // fatura: [{ value: '', disabled: true }],
      projeto: [''],
      obs: ['']
    });
  }

  get descricao() { return this.movimentoForm.get('descricao'); }
  get credito() { return this.movimentoForm.get('credito'); }
  get dataContabilizacao() { return this.movimentoForm.get('dataContabilizacao'); }
  get valor() { return this.movimentoForm.get('valor'); }
  get contribuinte() { return this.movimentoForm.get('contribuinte'); }
  get status() { return this.movimentoForm.get('status'); }
  // get conta() { return this.movimentoForm.get('conta'); }
  // get categoria() { return this.movimentoForm.get('categoria'); }
  // get subcategoria() { return this.movimentoForm.get('subcategoria'); }
  // get cartao() { return this.movimentoForm.get('cartao'); }
  // get fatura() { return this.movimentoForm.get('fatura'); }
  // get projeto() { return this.movimentoForm.get('projeto'); }
  get obs() { return this.movimentoForm.get('obs'); }
}
