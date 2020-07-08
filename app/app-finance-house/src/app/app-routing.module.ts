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
    path: 'movimentos',
    loadChildren: () => import('./movimentos/movimentos.module').then( m => m.MovimentosPageModule)
  },
  {
    path: 'contas',
    loadChildren: () => import('./contas/contas.module').then( m => m.ContasPageModule)
  },
  {
    path: 'menu-mais-opcoes',
    loadChildren: () => import('./menu-mais-opcoes/menu-mais-opcoes.module').then( m => m.MenuMaisOpcoesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'cartoes',
    loadChildren: () => import('./cartoes/cartoes.module').then( m => m.CartoesPageModule)
  },
  {
    path: 'cobrancas',
    loadChildren: () => import('./cobrancas/cobrancas.module').then( m => m.CobrancasPageModule)
  },
  {
    path: 'beneficiario',
    loadChildren: () => import('./beneficiario/beneficiario.module').then( m => m.BeneficiarioPageModule)
  },
  {
    path: 'tipos-conta',
    loadChildren: () => import('./tipos-conta/tipos-conta.module').then( m => m.TiposContaPageModule)
  },
  {
    path: 'subcategorias',
    loadChildren: () => import('./subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'contribuintes',
    loadChildren: () => import('./contribuintes/contribuintes.module').then( m => m.ContribuintesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
