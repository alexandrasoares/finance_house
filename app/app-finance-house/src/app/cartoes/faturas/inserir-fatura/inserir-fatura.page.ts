import { FaturaDTO } from './../../../core/models/fatura.dto';
import { ModalController } from '@ionic/angular';

import { MensagemToastService } from './../../../core/services/mensagem-toast.service';
import { FaturaService } from './../../../core/services/fatura.service';
import { CartaoService } from './../../../core/services/cartao.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from './../../../core/services/data.service';
import { Cartao } from './../../../core/models/cartao.model';
import { Fatura } from './../../../core/models/fatura.model';

@Component({
  selector: 'app-inserir-fatura',
  templateUrl: './inserir-fatura.page.html',
  styleUrls: ['./inserir-fatura.page.scss'],
})
export class InserirFaturaPage implements OnInit {

  faturaForm: FormGroup;
  cartao: Cartao;

  maxDate: string = DataService.getDatePickerMaxDate();
  monthShortNames: string[] = DataService.getMonthShortNames();

  @Input() cartaoid: number;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private cartaoService: CartaoService,
    private faturaSerivce: FaturaService,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  closeModal(faturaCriada: Fatura = null): void {
    this.modalController.dismiss(faturaCriada);
  }

  inserir(): void {
    const fatura: FaturaDTO = {
      referencia: DataService.getReference(this.referencia.value),
      cartao: this.cartao
    };

    this.faturaSerivce.insert(fatura).subscribe((dados: Fatura) => {
      this.toast.showSuccessToast(`Fatura ${dados.referencia} criada`);
      this.faturaForm.reset();
      this.closeModal(dados);
    });
  }

  private loadData(): void {
    this.cartaoService.getById(this.cartaoid).subscribe((dados: Cartao) => {
      this.cartao = dados;
      this.cartaoCredito.setValue(dados.nome);
    });
  }

  private initForm(): void {
    this.faturaForm = this.fb.group({
      cartaoCredito: [{ value: '', disabled: true }],
      referencia: ['', Validators.required]
    });
  }

  get cartaoCredito() { return this.faturaForm.get('cartaoCredito'); }
  get referencia() { return this.faturaForm.get('referencia'); }

}
