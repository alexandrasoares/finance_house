import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';
import { CadastroPageModule } from './../pages/cadastro/cadastro.module';
import { LoginPageModule } from './../pages/login/login.module';
import { BemVindoPageModule } from './../pages/bem-vindo/bem-vindo.module';

const routes: Routes = [
  {
    path: 'home',
    component: IndexPage,
    children: [
        {
            path: '',
            loadChildren: () => import('../pages/bem-vindo/bem-vindo.module').then(m => BemVindoPageModule)
        },
        {
            path: 'login',
            loadChildren: () => import('../pages/login/login.module').then(m => LoginPageModule)
        },
        {
            path: '',
            loadChildren: () => import('../pages/cadastro/cadastro.module').then(m => CadastroPageModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouting {}
