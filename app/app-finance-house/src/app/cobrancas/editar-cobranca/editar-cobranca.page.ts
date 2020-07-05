import { DataService } from './../../core/services/data.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { BeneficiarioService } from './../../core/services/beneficiario.service';
import { CobrancaService } from './../../core/services/cobranca.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Beneficiario } from './../../core/models/beneficiario.model';
import { Cobranca } from './../../core/models/cobranca.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-cobranca',
  templateUrl: './editar-cobranca.page.html',
  styleUrls: ['./editar-cobranca.page.scss'],
})
export class EditarCobrancaPage implements OnInit {

  cobrancaForm: FormGroup;
  cobranca: Cobranca;
  beneficiarios: Beneficiario[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private cobrancaService: CobrancaService,
    private beneficiarioService: BeneficiarioService,
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

  getMaxDate(): string {
    return DataService.getDatePickerMaxDate();
  }

  atualizar(): void {
    this.cobranca.descricao = this.descricao.value;
    this.cobranca.parcela = this.parcela.value;
    this.cobranca.dataVencimento = DataService.toApiPattern(this.dataVencimento.value);
    this.cobranca.valor = this.valor.value;
    this.cobranca.juros = this.juros.value;
    this.cobranca.desconto = this.desconto.value;
    this.cobranca.observacao = this.obs.value;

    this.cobrancaService.update(this.cobranca).subscribe(() => this.toast.showSuccessToast('Cobrança atualizada'));
  }

  private loadData(event: any = null): void {
    const cobrancaId: number = this.activatedRoute.snapshot.params['id'];

    this.cobrancaService.getById(cobrancaId).subscribe((dados: Cobranca) => {
      this.cobranca = dados;
      this.loadForm(dados);
    });

    this.beneficiarioService.getAll().subscribe((dados: Beneficiario[]) => {
      this.beneficiarios = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  private loadForm(cobranca: Cobranca): void {
    this.descricao.setValue(cobranca.descricao);
    this.parcela.setValue(cobranca.parcela);
    this.dataVencimento.setValue(cobranca.dataVencimento);
    this.valor.setValue(cobranca.valor);
    this.saldo.setValue(cobranca.saldo);
    this.juros.setValue(cobranca.juros);
    this.desconto.setValue(cobranca.desconto);
    this.beneficiario.setValue(cobranca.beneficiario.id);
    this.status.setValue(Cobranca.transformStatus(cobranca.status));
    this.obs.setValue(cobranca.observacao);
  }

  private initForm(): void {
    this.cobrancaForm = this.fb.group({
      descricao: ['', Validators.required],
      parcela: [''],
      dataVencimento: ['', Validators.required],
      valor: ['', Validators.required],
      saldo: [{value: '', disabled: true}],
      juros: [''],
      desconto: [''],
      beneficiario: ['', Validators.required],
      status: [{value: '', disabled: true}],
      obs: ['']
    });
  }

  get descricao() { return this.cobrancaForm.get('descricao'); }
  get parcela() { return this.cobrancaForm.get('parcela'); }
  get dataVencimento() { return this.cobrancaForm.get('dataVencimento'); }
  get valor() { return this.cobrancaForm.get('valor'); }
  get juros() { return this.cobrancaForm.get('juros'); }
  get desconto() { return this.cobrancaForm.get('desconto'); }
  get saldo() { return this.cobrancaForm.get('saldo'); }
  get beneficiario() { return this.cobrancaForm.get('beneficiario'); }
  get status() { return this.cobrancaForm.get('status'); }
  get obs() { return this.cobrancaForm.get('obs'); }

}
