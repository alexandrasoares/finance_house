import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login/login.page';
import { RecuperarSenhaPage } from './recuperar-senha/recuperar-senha.page';
import { CadastroUsuarioPage } from './cadastro-usuario/cadastro-usuario.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'recuperar-senha', component: RecuperarSenhaPage },
  { path: 'cadastro-usuario', component: CadastroUsuarioPage}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
