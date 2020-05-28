import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroContaPage } from './cadastro-conta.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroContaPageRoutingModule {}
