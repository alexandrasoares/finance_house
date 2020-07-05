import { BeneficiarioService } from './../../core/services/beneficiario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Beneficiario } from './../../core/models/beneficiario.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-beneficiario',
  templateUrl: './detalhes-beneficiario.page.html',
  styleUrls: ['./detalhes-beneficiario.page.scss'],
})
export class DetalhesBeneficiarioPage implements OnInit {

  beneficiarioForm: FormGroup;
  beneficiario: Beneficiario;

  constructor(
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private activatedRoute: ActivatedRoute
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
      nome: [{value: '', disabled: true}],
      banco: [{value: '', disabled: true}],
      agencia: [{value: '', disabled: true}],
      conta: [{value: '', disabled: true}],
      limite: [{value: '', disabled: true}],
      obs: [{value: '', disabled: true}]
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
