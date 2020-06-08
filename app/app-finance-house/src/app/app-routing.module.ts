import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./paginas/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'contas-cadastro',
    loadChildren: () => import('./paginas/contas/contas-cadastro/contas-cadastro.module').then( m => m.ContasCadastroPageModule)
  },
  {
    path: 'contas-lista',
    loadChildren: () => import('./paginas/contas/contas-lista/contas-lista.module').then( m => m.ContasListaPageModule)
  },
  {
    path: 'contas-detalhe',
    loadChildren: () => import('./paginas/contas/contas-detalhe/contas-detalhe.module').then( m => m.ContasDetalhePageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./paginas/usuario/usuario.module').then( m => m.UsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
