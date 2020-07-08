import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContribuintesPageRoutingModule } from './contribuintes-routing.module';

import { ContribuintesPage } from './contribuintes.page';
import { ListaContribuintePage } from './lista-contribuinte/lista-contribuinte.page';
import { InserirContribuintePage } from './inserir-contribuinte/inserir-contribuinte.page';
import { DetalhesContribuintePage } from './detalhes-contribuinte/detalhes-contribuinte.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ContribuintesPageRoutingModule
  ],
  declarations: [
    ContribuintesPage,
    DetalhesContribuintePage,
    InserirContribuintePage,
    ListaContribuintePage
  ]
})
export class ContribuintesPageModule {}
