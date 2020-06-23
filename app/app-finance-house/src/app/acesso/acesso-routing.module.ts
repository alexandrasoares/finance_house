import { CadastroUsuarioPage } from './cadastro-usuario/cadastro-usuario.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '', redirectTo: 'acesso', pathMatch: 'full'
    },
    {
      path: 'home', component: CadastroUsuarioPage
    },
    // {
    //   path: 'cadastro-usuario', component: CadastroUsuarioPage
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
