import { InicioPage } from './inicio/inicio.page';
import { CadastroUsuarioPage } from './cadastro-usuario/cadastro-usuario.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from './../shared/shared.module';
import { LoginPage } from './login/login.page';
import { AcessoRoutingModule } from './acesso-routing.module';
import { RecuperarSenhaPage } from './recuperar-senha/recuperar-senha.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AcessoRoutingModule
  ],
  declarations: [
    LoginPage,
    RecuperarSenhaPage,
    CadastroUsuarioPage,
    InicioPage
  ]
})
export class AcessoModule {}
