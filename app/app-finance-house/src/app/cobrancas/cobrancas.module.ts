import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobrancasPageRoutingModule } from './cobrancas-routing.module';

import { CobrancasPage } from './cobrancas.page';
import { SharedModule } from '../shared/shared.module';
import { PagarCobrancaPage } from './pagar-cobranca/pagar-cobranca.page';
import { RemoverCobrancaPage } from './remover-cobranca/remover-cobranca.page';
import { EditarCobrancaPage } from './editar-cobranca/editar-cobranca.page';
import { ListaCobrancaPage } from './lista-cobranca/lista-cobranca.page';
import { InserirCobrancaPage } from './inserir-cobranca/inserir-cobranca.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CobrancasPageRoutingModule
  ],
  declarations: [
    CobrancasPage,
    InserirCobrancaPage,
    ListaCobrancaPage,
    EditarCobrancaPage,
    PagarCobrancaPage,
    RemoverCobrancaPage
  ]
})
export class CobrancasPageModule {}
