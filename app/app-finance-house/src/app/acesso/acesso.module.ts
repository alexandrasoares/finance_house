import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from './../shared/shared.module';
import { CadastroUsuarioPage } from './cadastro-usuario/cadastro-usuario.page';
import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    LoginPage,
    CadastroUsuarioPage
  ]
})
export class AcessoModule {}
