import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMaisOpcoesPageRoutingModule } from './menu-mais-opcoes-routing.module';

import { MenuMaisOpcoesPage } from './menu-mais-opcoes.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMaisOpcoesPageRoutingModule
  ],
  declarations: [
    MenuMaisOpcoesPage
  ]
})
export class MenuMaisOpcoesPageModule {}