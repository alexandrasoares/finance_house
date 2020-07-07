import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../../core/services/auth.service';
import { Usuario } from './../../core/models/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  modal = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalController: ModalController
  ) {
    this.initForm();
  }

  atualizarUsuarioForm: FormGroup;
  usuario: Usuario;
  showCampoNovaSenha = false;

  ngOnInit() {
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  setShowCampoNovaSenha(): void {
    // Implementação futura (possibilidade de alterar a senha)
    // this.showCampoNovaSenha = !this.showCampoNovaSenha
  }

  private initForm(): void {
    this.atualizarUsuarioForm = this.fb.group({
      novaSenha: ['', Validators.required]
    });
  }

  private loadData(): void {
    this.usuario = this.authService.getUsuarioLogado();
    this.usuario.tipo = Usuario.transformTipo(this.usuario.tipo);
  }

}
