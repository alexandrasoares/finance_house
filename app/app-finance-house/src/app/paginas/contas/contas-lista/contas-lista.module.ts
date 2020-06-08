import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasListaPageRoutingModule } from './contas-lista-routing.module';

import { ContasListaPage } from './contas-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasListaPageRoutingModule
  ],
  declarations: [ContasListaPage]
})
export class ContasListaPageModule {}
