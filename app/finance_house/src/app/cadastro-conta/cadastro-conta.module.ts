import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroContaPageRoutingModule } from './cadastro-conta-routing.module';

import { CadastroContaPage } from './cadastro-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroContaPageRoutingModule
  ],
  declarations: [CadastroContaPage]
})
export class CadastroContaPageModule {}
