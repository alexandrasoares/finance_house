import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasCadastroPageRoutingModule } from './contas-cadastro-routing.module';

import { ContasCadastroPage } from './contas-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasCadastroPageRoutingModule
  ],
  declarations: [ContasCadastroPage]
})
export class ContasCadastroPageModule {}
