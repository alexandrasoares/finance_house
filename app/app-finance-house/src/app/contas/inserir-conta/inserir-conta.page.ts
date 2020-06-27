import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { TipoContaService } from './../../core/services/tipo-conta.service';
import { Conta } from './../../core/models/conta.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { ContaService } from './../../core/services/conta.service';
import { ContaDTO } from './../../core/conta.dto';
import { TipoConta } from './../../core/models/tipo-conta.model';

@Component({
  selector: 'app-inserir-conta',
  templateUrl: './inserir-conta.page.html',
  styleUrls: ['./inserir-conta.page.scss'],
})
export class InserirContaPage implements OnInit {

  contaForm: FormGroup;
  tiposConta: TipoConta[] = [];

  constructor(
    private contaService: ContaService,
    private toast: MensagemToastService,
    private fb: FormBuilder,
    private tipoContaService: TipoContaService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadTiposConta();
  }

  doRefresh(event: any): void {
    this.loadTiposConta(event);
  }

  inserir(): void {
    const conta: ContaDTO = {
      nome: this.nome.value,
      banco: this.banco.value,
      agencia: this.agencia.value,
      conta: this.conta.value,
      saldoInicial: this.saldoInicial.value,
      compoemSaldo: this.compoemSaldo.value,
      // tipo: this.tiposConta.find((t: TipoConta) => t.id === this.tipo.value);
    };

    this.contaService.insert(conta).subscribe((dados: Conta) => {
      this.contaForm.reset();
      this.toast.showToast(`Conta ${conta.nome} criada`);
    });
  }

  private initForm(): void {
    this.contaForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      banco: ['', Validators.required],
      agencia: ['', Validators.required],
      conta: ['', Validators.required],
      compoemSaldo: [true, Validators.required],
      saldoInicial: ['']
    });
  }

  private loadTiposConta(event: any = null): void {
    this.tipoContaService.getAll().subscribe((dados: TipoConta[]) => {
      this.tiposConta = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  get nome() {
    return this.contaForm.get('nome');
  }
  get tipo() {
    return this.contaForm.get('tipo');
  }
  get banco() {
    return this.contaForm.get('banco');
  }
  get agencia() {
    return this.contaForm.get('agencia');
  }
  get conta() {
    return this.contaForm.get('conta');
  }
  get saldoInicial() {
    return this.contaForm.get('saldoInicial');
  }
  get compoemSaldo() {
    return this.contaForm.get('compoemSaldo');
  }
}
