import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CartaoDTO } from './../../core/models/cartao.dto';
import { Cartao } from './../../core/models/cartao.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CartaoService } from './../../core/services/cartao.service';

@Component({
  selector: 'app-inserir-cartao',
  templateUrl: './inserir-cartao.page.html',
  styleUrls: ['./inserir-cartao.page.scss'],
})
export class InserirCartaoPage implements OnInit {

  cartaoForm: FormGroup;
  dias: {value: any, label: string}[] = this.getDias();

  constructor(
    private fb: FormBuilder,
    private cartaoService: CartaoService,
    private toast: MensagemToastService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  inserir(): void {
    const cartao: CartaoDTO = {
      nome: this.nome.value,
      bandeira: this.bandeira.value,
      diaFechamento: this.diaFechamento.value,
      diaPagamento: this.diaPagamento.value,
      limite: this.limite.value
    };

    this.cartaoService.insert(cartao).subscribe((dados: Cartao) => {
      this.cartaoForm.reset();
      this.toast.showSuccessToast(`Cartão ${cartao.nome} criado`);
    });
  }

  private getDias(): {value: any, label: string}[] {
    const dias: {value: any, label: string}[] = [];

    for (let i = 1; i <= 31; i++){
      dias.push({value: i, label: i.toString()});
    }

    return dias;
  }

  private initForm(): void {
    this.cartaoForm = this.fb.group({
      nome: ['', Validators.required],
      bandeira: ['', Validators.required],
      diaFechamento: ['', Validators.required],
      diaPagamento: ['', Validators.required],
      limite: ['', Validators.required]
    });
  }

  get nome() { return this.cartaoForm.get('nome'); }
  get bandeira() { return this.cartaoForm.get('bandeira'); }
  get diaFechamento() { return this.cartaoForm.get('diaFechamento'); }
  get diaPagamento() { return this.cartaoForm.get('diaPagamento'); }
  get limite() { return this.cartaoForm.get('limite'); }

}
