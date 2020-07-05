import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposContaPage } from './tipos-conta.page';
import { EditarTipoContaPage } from './editar-tipo-conta/editar-tipo-conta.page';
import { ListaTipoContaPage } from './lista-tipo-conta/lista-tipo-conta.page';
import { InserirTipoContaPage } from './inserir-tipo-conta/inserir-tipo-conta.page';

const routes: Routes = [
  { path: '', redirectTo: 'tipo-contas', pathMatch: 'full' },
  { path: 'tipo-contas', component: TiposContaPage },
  { path: 'lista-tipo-contas', component: ListaTipoContaPage },
  { path: 'inserir-tipo-contas', component: InserirTipoContaPage },
  { path: 'editar-tipo-contas', component: EditarTipoContaPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposContaPageRoutingModule {}
