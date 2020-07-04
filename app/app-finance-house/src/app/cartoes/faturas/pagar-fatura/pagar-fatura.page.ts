import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataService } from './../../../core/services/data.service';
import { PagamentoFaturaDTO } from './../../../core/models/pagamento-fatura.dto';
import { MensagemToastService } from './../../../core/services/mensagem-toast.service';
import { FaturaService } from './../../../core/services/fatura.service';
import { ContaService } from './../../../core/services/conta.service';
import { Fatura } from './../../../core/models/fatura.model';
import { Conta } from './../../../core/models/conta.model';

@Component({
  selector: 'app-pagar-fatura',
  templateUrl: './pagar-fatura.page.html',
  styleUrls: ['./pagar-fatura.page.scss'],
})
export class PagarFaturaPage implements OnInit {

  pagamentoForm: FormGroup;
  contas: Conta[] = [];

  @Input() fatura: Fatura;

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private faturaService: FaturaService,
    private modalController: ModalController,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  inserir(): void {
    const pagamentoFatura: PagamentoFaturaDTO = {
      fatura: this.fatura,
      conta: this.contas.find((c: Conta) => c.id === this.conta.value),
      dataPagamento: DataService.toApiPattern(this.dataPagamento.value),
      valorPago: this.valorPago.value
    };

    this.faturaService.pay(pagamentoFatura).subscribe(() => {
      this.toast.showSuccessToast(`Fatura ${this.fatura.referencia} paga com sucesso`);
      this.closeModal();
    });
  }

  loadData(): void {
    this.loadForm(this.fatura);
    this.contaService.getAll().subscribe((dados: Conta[]) => this.contas = dados);
  }

  getMinDate(): string {
    return DataService.getDatePickerMinDate();
  }

  getMaxDate(): string {
    return DataService.getDatePickerMaxDate();
  }

  initForm(): void {
    this.pagamentoForm = this.fb.group({
      cartaoCredito: [{value: '', disabled: true}],
      referenciaFatura: [{value: '', disabled: true}],
      conta: ['', Validators.required],
      dataPagamento: ['', Validators.required],
      valorPago: ['', Validators.required]
    });
  }

  loadForm(fatura: Fatura): void {
    this.referenciaFatura.setValue(fatura.referencia);
    this.cartaoCredito.setValue(fatura.cartao.nome);
    this.valorPago.setValue(fatura.valor - fatura.valorPago);
  }

  get cartaoCredito() { return this.pagamentoForm.get('cartaoCredito'); }
  get referenciaFatura() { return this.pagamentoForm.get('referenciaFatura'); }
  get conta() { return this.pagamentoForm.get('conta'); }
  get dataPagamento() { return this.pagamentoForm.get('dataPagamento'); }
  get valorPago() { return this.pagamentoForm.get('valorPago'); }

}
