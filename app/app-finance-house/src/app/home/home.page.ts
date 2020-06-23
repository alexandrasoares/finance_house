import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AuthService } from '../core/services/auth.service';
import { PerfilPage } from './perfil/perfil.page';
import { ConfiguracaoPage } from './configuracao/configuracao.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
  }

  meuPerfil(): void {
    this.modalController.create({
      component: PerfilPage,
    }).then((modal) => modal.present());
  }

  exibirConfiguracao(): void {
    this.modalController.create({
      component: ConfiguracaoPage
    }).then((modal) => modal.present());
  }

}
