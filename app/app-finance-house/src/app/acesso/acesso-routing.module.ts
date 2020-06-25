import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroUsuarioPage } from './cadastro-usuario/cadastro-usuario.page';
import { LoginPage } from './login/login.page';

const routes: Routes = [
    {  path: '', redirectTo: 'login', pathMatch: 'full' },
    {  path: 'login', component: LoginPage },
    {  path: 'cadastro', component: CadastroUsuarioPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
