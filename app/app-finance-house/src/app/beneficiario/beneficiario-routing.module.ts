import { DetalhesBeneficiarioPage } from './detalhes-beneficiario/detalhes-beneficiario.page';
import { EditarBeneficiarioPage } from './editar-beneficiario/editar-beneficiario.page';
import { InserirBeneficiarioPage } from './inserir-beneficiario/inserir-beneficiario.page';
import { ListaBeneficiarioPage } from './lista-beneficiario/lista-beneficiario.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiarioPage } from './beneficiario.page';

const routes: Routes = [
  { path: '', redirectTo: 'beneficiario', pathMatch: 'full' },
  { path: 'beneficiario', component: BeneficiarioPage },
  { path: 'lista-beneficiario', component: ListaBeneficiarioPage },
  { path: 'inserir-beneficiario', component: InserirBeneficiarioPage },
  { path: 'editar-beneficiario', component: EditarBeneficiarioPage },
  { path: 'detalhes-beneficiario', component: DetalhesBeneficiarioPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiarioPageRoutingModule {}
