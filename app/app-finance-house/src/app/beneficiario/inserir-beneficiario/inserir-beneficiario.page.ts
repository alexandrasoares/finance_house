import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Beneficiario } from './../../core/models/beneficiario.model';
import { BeneficiarioDTO } from './../../core/models/beneficiario.dto';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { BeneficiarioService } from './../../core/services/beneficiario.service';

@Component({
  selector: 'app-inserir-beneficiario',
  templateUrl: './inserir-beneficiario.page.html',
  styleUrls: ['./inserir-beneficiario.page.scss'],
})
export class InserirBeneficiarioPage implements OnInit {

  beneficiarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private toast: MensagemToastService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  inserir(): void {
    const beneficiario: BeneficiarioDTO = {
      nome: this.nome.value,
      banco: this.banco.value,
      agencia: this.agencia.value,
      conta: this.conta.value,
      limite: this.limite.value,
      observacao: this.obs.value
    };

    this.beneficiarioService.insert(beneficiario).subscribe((dados: Beneficiario) => {
      this.beneficiarioForm.reset();
      this.toast.showSuccessToast(`Beneficiário ${dados.nome} inserido com sucesso`);
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

  get nome() { return this.beneficiarioForm.get('nome'); }
  get banco() { return this.beneficiarioForm.get('banco'); }
  get agencia() { return this.beneficiarioForm.get('agencia'); }
  get conta() { return this.beneficiarioForm.get('conta'); }
  get limite() { return this.beneficiarioForm.get('limite'); }
  get obs() { return this.beneficiarioForm.get('obs'); }

}
