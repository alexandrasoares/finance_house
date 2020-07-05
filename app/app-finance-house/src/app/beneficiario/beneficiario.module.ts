import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiarioPageRoutingModule } from './beneficiario-routing.module';

import { BeneficiarioPage } from './beneficiario.page';
import { SharedModule } from '../shared/shared.module';
import { ListaBeneficiarioPage } from './lista-beneficiario/lista-beneficiario.page';
import { InserirBeneficiarioPage } from './inserir-beneficiario/inserir-beneficiario.page';
import { EditarBeneficiarioPage } from './editar-beneficiario/editar-beneficiario.page';
import { DetalhesBeneficiarioPage } from './detalhes-beneficiario/detalhes-beneficiario.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    BeneficiarioPageRoutingModule
  ],
  declarations: [
    BeneficiarioPage,
    DetalhesBeneficiarioPage,
    EditarBeneficiarioPage,
    InserirBeneficiarioPage,
    ListaBeneficiarioPage
  ]
})
export class BeneficiarioPageModule {}
