import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasDetalhePageRoutingModule } from './contas-detalhe-routing.module';

import { ContasDetalhePage } from './contas-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasDetalhePageRoutingModule
  ],
  declarations: [ContasDetalhePage]
})
export class ContasDetalhePageModule {}
