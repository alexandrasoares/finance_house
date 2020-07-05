import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheSaldoPage } from './detalhe-saldo/detalhe-saldo.page';
import { ListaContasPage } from './lista-contas/lista-contas.page';
import { ContasPage } from './contas.page';
import { InserirContaPage } from './inserir-conta/inserir-conta.page';
import { EditarContaPage } from './editar-conta/editar-conta.page';

const routes: Routes = [
  { path: '', redirectTo: 'contas', pathMatch: 'full' },
  { path: 'contas', component: ContasPage },
  { path: 'lista-contas', component: ListaContasPage },
  { path: 'inserir-conta', component: InserirContaPage },
  { path: 'detalhe-saldo', component: DetalheSaldoPage },
  { path: 'editar-conta', component: EditarContaPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasPageRoutingModule {}
