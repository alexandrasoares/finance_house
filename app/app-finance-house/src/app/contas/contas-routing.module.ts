import { InserirContaPage } from './inserir-conta/inserir-conta.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheSaldoPage } from './detalhe-saldo/detalhe-saldo.page';
import { ListaContasPage } from './lista-contas/lista-contas.page';
import { ContasPage } from './contas.page';

const routes: Routes = [
  { path: '', redirectTo: 'contas', pathMatch: 'full' },
  { path: 'contas', component: ContasPage },
  { path: 'lista-contas', component: ListaContasPage },
  { path: 'detalhe-saldo', component: DetalheSaldoPage },
  { path: 'inserir-conta', component: InserirContaPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasPageRoutingModule {}
