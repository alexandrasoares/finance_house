import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
        {
            path: '',
            loadChildren: () => import('../paginas/bem-vindo/bem-vindo.module').then(m => m.BemVindoPageModule)
        },
        {
            path: 'login',
            loadChildren: () => import('../paginas/login/login.module').then(m => m.LoginPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../paginas/contas/contas-cadastro/contas-cadastro.module').then(m => m.ContasCadastroPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRouter {}
