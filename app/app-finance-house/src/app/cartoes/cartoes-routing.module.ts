import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartoesPage } from './cartoes.page';
import { InserirCartaoPage } from './inserir-cartao/inserir-cartao.page';
import { ListaCartoesPage } from './lista-cartoes/lista-cartoes.page';
import { FaturasPage } from './faturas/faturas.page';
import { EditarCartaoPage } from './editar-cartao/editar-cartao.page';

const routes: Routes = [
  { path: '', redirectTo: 'cartoes', pathMatch: 'full' },
  { path: 'cartoes', component: CartoesPage },
  { path: 'inserir-cartao', component: InserirCartaoPage },
  { path: 'editar-cartao', component: EditarCartaoPage },
  { path: 'lista-cartao', component: ListaCartoesPage },
  { path: 'detalhe-cartao', component: FaturasPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartoesPageRoutingModule {}
