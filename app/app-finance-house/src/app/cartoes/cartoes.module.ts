import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartoesPageRoutingModule } from './cartoes-routing.module';

import { CartoesPage } from './cartoes.page';
import { SharedModule } from '../shared/shared.module';
import { InserirCartaoPage } from './inserir-cartao/inserir-cartao.page';
import { ListaCartoesPage } from './lista-cartoes/lista-cartoes.page';
import { FaturasPage } from './faturas/faturas.page';
import { EditarCartaoPage } from './editar-cartao/editar-cartao.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CartoesPageRoutingModule
  ],
  declarations: [
    CartoesPage,
    InserirCartaoPage,
    EditarCartaoPage,
    ListaCartoesPage,
    FaturasPage
  ]
})
export class CartoesPageModule {}
