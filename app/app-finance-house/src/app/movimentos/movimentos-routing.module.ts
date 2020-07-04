
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentosPage } from './movimentos.page';
import { InserirMovimentosPage } from './inserir-movimentos/inserir-movimentos.page';
import { DetalheSaldoPage } from './../contas/detalhe-saldo/detalhe-saldo.page';
import { ListaMovimentosPage } from './../shared/lista-movimentos/lista-movimentos.page';

const routes: Routes = [
  { path: '', redirectTo: 'movimentos', pathMatch: 'full' },
  { path: 'movimentos', component: MovimentosPage },
  { path: 'lista-movimentos', component: ListaMovimentosPage },
  { path: 'detalhe-movimentos', component: DetalheSaldoPage },
  { path: 'inserir-movimentos', component: InserirMovimentosPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimentosPageRoutingModule {}
