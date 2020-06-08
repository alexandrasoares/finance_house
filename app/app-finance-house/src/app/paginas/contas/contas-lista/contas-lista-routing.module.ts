import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasListaPage } from './contas-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ContasListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasListaPageRoutingModule {}
