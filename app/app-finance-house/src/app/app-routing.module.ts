import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'acesso', pathMatch: 'full'
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contas',
    loadChildren: () => import('./contas/contas.module').then( m => m.ContasPageModule)
  },  {
    path: 'menu-mais-opcoes',
    loadChildren: () => import('./menu-mais-opcoes/menu-mais-opcoes.module').then( m => m.MenuMaisOpcoesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
