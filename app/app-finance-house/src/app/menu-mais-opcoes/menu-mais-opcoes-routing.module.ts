import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMaisOpcoesPage } from './menu-mais-opcoes.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMaisOpcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMaisOpcoesPageRoutingModule {}
