import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasPage
  },
  {
    path: 'detalhes-categoria',
    loadChildren: () => import('./detalhes-categoria/detalhes-categoria.module').then( m => m.DetalhesCategoriaPageModule)
  },
  {
    path: 'editar-categoria',
    loadChildren: () => import('./editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule)
  },
  {
    path: 'inserir-categoria',
    loadChildren: () => import('./inserir-categoria/inserir-categoria.module').then( m => m.InserirCategoriaPageModule)
  },
  {
    path: 'lista-categorias',
    loadChildren: () => import('./lista-categorias/lista-categorias.module').then( m => m.ListaCategoriasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
