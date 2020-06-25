import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracaoPage } from './configuracao/configuracao.page';
import { PerfilPage } from './perfil/perfil.page';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'perfil', component: PerfilPage },
  { path: 'configuracao', component: ConfiguracaoPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
