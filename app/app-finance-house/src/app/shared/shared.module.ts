import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BrMaskerModule } from 'br-mask';

import { HeaderPage } from './header/header.page';
import {NgPipesModule} from 'ngx-pipes';
import { ListaMovimentosPage } from './lista-movimentos/lista-movimentos.page';
import { AlertaPage } from './lista-movimentos/alerta/alerta.page';
import { ListaPage } from './lista-movimentos/lista/lista.page';
import { CartaoCreditoPipe } from '../config/pipes/cartao-credito';
import { ListaContribuintesPage } from './lista-contribuintes/lista-contribuintes.page';
import { LContribuintesPage } from './lista-contribuintes/l-contribuintes/l-contribuintes.page';
import { AlertaContribuintesPage } from './lista-contribuintes/alerta-contribuintes/alerta-contribuintes.page';

@NgModule({
  declarations: [
    HeaderPage,
    ListaMovimentosPage,
    AlertaPage,
    ListaPage,
    CartaoCreditoPipe,
    ListaContribuintesPage,
    LContribuintesPage,
    AlertaContribuintesPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgPipesModule,
    BrMaskerModule
  ],
  exports: [
    HeaderPage,
    ListaMovimentosPage,
    AlertaPage,
    ListaPage,
    CartaoCreditoPipe,
    ListaContribuintesPage,
    LContribuintesPage,
    AlertaContribuintesPage
  ]
})
export class SharedModule { }
