import { ListaTipoContaPage } from './lista-tipo-conta/lista-tipo-conta.page';
import { EditarTipoContaPage } from './editar-tipo-conta/editar-tipo-conta.page';
import { InserirTipoContaPage } from './inserir-tipo-conta/inserir-tipo-conta.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposContaPageRoutingModule } from './tipos-conta-routing.module';

import { TiposContaPage } from './tipos-conta.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    TiposContaPageRoutingModule
  ],
  declarations: [
    TiposContaPage,
    InserirTipoContaPage,
    EditarTipoContaPage,
    ListaTipoContaPage
  ]
})
export class TiposContaPageModule {}
