import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContribuintesPage } from './contribuintes.page';
import { DetalhesContribuintePage } from './detalhes-contribuinte/detalhes-contribuinte.page';
import { InserirContribuintePage } from './inserir-contribuinte/inserir-contribuinte.page';
import { ListaContribuintePage } from './lista-contribuinte/lista-contribuinte.page';

const routes: Routes = [
  { path: '', redirectTo: 'contribuinte', pathMatch: 'full' },
  { path: 'contribuinte', component: ContribuintesPage },
  { path: 'lista-contribuinte', component: ListaContribuintePage },
  { path: 'inserir-contribuinte', component: InserirContribuintePage },
  { path: 'detalhes-contribuinte', component: DetalhesContribuintePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContribuintesPageRoutingModule {}
