import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { TipoConta } from './../../core/models/tipo-conta.model';
import { TipoContaDTO } from './../../core/models/tipo-conta.dto';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { TipoContaService } from './../../core/services/tipo-conta.service';

@Component({
  selector: 'app-inserir-tipo-conta',
  templateUrl: './inserir-tipo-conta.page.html',
  styleUrls: ['./inserir-tipo-conta.page.scss'],
})
export class InserirTipoContaPage implements OnInit {

  tipoContaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tipoContaService: TipoContaService,
    private toast: MensagemToastService,
    private modalController: ModalController,
    private router: Router,
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  inserir(): void {
    const tipoConta: TipoContaDTO = { nome: this.nome.value };

    this.tipoContaService.insert(tipoConta).subscribe((dados: TipoConta) => {
      this.router.navigate(['/tipos-conta'], { replaceUrl: true });
      this.toast.showSuccessToast(`Tipo de conta ${tipoConta.nome} criado com sucesso`);
      this.tipoContaForm.reset();
    });
  }

  private initForm(): void {
    this.tipoContaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  get nome() { return this.tipoContaForm.get('nome'); }

}
