import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { BeneficiarioService } from './../../core/services/beneficiario.service';
import { Beneficiario } from './../../core/models/beneficiario.model';

@Component({
  selector: 'app-editar-beneficiario',
  templateUrl: './editar-beneficiario.page.html',
  styleUrls: ['./editar-beneficiario.page.scss'],
})
export class EditarBeneficiarioPage implements OnInit {

  beneficiarioForm: FormGroup;
  beneficiario: Beneficiario;

  constructor(
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private activatedRoute: ActivatedRoute,
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

  atualizar(): void {
    this.beneficiario.nome = this.nome.value;
    this.beneficiario.banco = this.banco.value;
    this.beneficiario.agencia = this.agencia.value;
    this.beneficiario.conta = this.conta.value;
    this.beneficiario.limite = this.limite.value;
    this.beneficiario.observacao = this.obs.value;

    this.beneficiarioService.update(this.beneficiario).subscribe(() => this.toast.showSuccessToast('Beneficiário atualizado'));
  }

  private loadData(event: any = null): void {
    const beneficiarioId: number = this.activatedRoute.snapshot.params['id'];

    this.beneficiarioService.getById(beneficiarioId).subscribe((dados: Beneficiario) => {
      this.beneficiario = dados;
      this.loadForm(dados);

      if (event !== null){
        event.target.complete();
      }
    });
  }

  private initForm(): void {
    this.beneficiarioForm = this.fb.group({
      nome: ['', Validators.required],
      banco: [''],
      agencia: [''],
      conta: [''],
      limite: [''],
      obs: ['']
    });
  }

  private loadForm(beneficiario: Beneficiario): void {
    this.nome.setValue(beneficiario.nome);
    this.banco.setValue(beneficiario.banco);
    this.agencia.setValue(beneficiario.agencia);
    this.conta.setValue(beneficiario.conta);
    this.limite.setValue(beneficiario.limite);
    this.obs.setValue(beneficiario.observacao);
  }

  get nome() { return this.beneficiarioForm.get('nome'); }
  get banco() { return this.beneficiarioForm.get('banco'); }
  get agencia() { return this.beneficiarioForm.get('agencia'); }
  get conta() { return this.beneficiarioForm.get('conta'); }
  get limite() { return this.beneficiarioForm.get('limite'); }
  get obs() { return this.beneficiarioForm.get('obs'); }

}
