import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasPageRoutingModule } from './contas-routing.module';

import { ContasPage } from './contas.page';
import { SharedModule } from '../shared/shared.module';
import { DetalheSaldoPage } from './detalhe-saldo/detalhe-saldo.page';
import { ListaContasPage } from './lista-contas/lista-contas.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContasPageRoutingModule
  ],
  declarations: [
    ContasPage,
    DetalheSaldoPage,
    ListaContasPage
  ]
})
export class ContasPageModule {}
