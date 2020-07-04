import { EditarMovimentosPage } from './editar-movimentos/editar-movimentos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentosPageRoutingModule } from './movimentos-routing.module';

import { MovimentosPage } from './movimentos.page';
import { InserirMovimentosPage } from './inserir-movimentos/inserir-movimentos.page';
import { DetalhesMovimentosPage } from './detalhes-movimentos/detalhes-movimentos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MovimentosPageRoutingModule
  ],
  declarations: [
    MovimentosPage,
    InserirMovimentosPage,
    DetalhesMovimentosPage,
    EditarMovimentosPage
  ]
})
export class MovimentosPageModule {}
