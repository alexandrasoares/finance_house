import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderPage } from './header/header.page';
import {NgPipesModule} from 'ngx-pipes';
import { ListaMovimentosPage } from './lista-movimentos/lista-movimentos.page';
import { AlertaPage } from './lista-movimentos/alerta/alerta.page';
import { ListaPage } from './lista-movimentos/lista/lista.page';

@NgModule({
  declarations: [
    HeaderPage,
    ListaMovimentosPage,
    AlertaPage,
    ListaPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgPipesModule
  ],
  exports: [
    HeaderPage,
    ListaMovimentosPage,
    AlertaPage,
    ListaPage
  ]
})
export class SharedModule { }
