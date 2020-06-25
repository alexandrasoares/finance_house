import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { AuthService } from './../../core/services/auth.service';
import { RecuperarSenhaModel } from './../../core/models/recuperar-senha.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  recuperarSenhaForm: FormGroup;
  modal = true;

  @Input() loginOuEmail = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalController: ModalController,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadForm(this.loginOuEmail);
  }

  loadForm(loginOuEmail: string): void {
    this.recuperarSenhaForm.get('loginOuEmail').setValue(loginOuEmail);
  }

  initForm(): void {
    this.recuperarSenhaForm = this.fb.group({
      loginOuEmail: ['', Validators.required]
    });
  }

  enviar(): void {
    const recuperarSenhaModel: RecuperarSenhaModel = {
      loginOuEmail: this.recuperarSenhaForm.get('loginOuEmail').value
  };

    this.authService.recuperaSenha(recuperarSenhaModel).subscribe(() => {
        this.recuperarSenhaForm.reset();
        this.toast.showToast('A nova senha foi enviada para o e-mail cadastrado');
        this.closeModal();
    });
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

}
