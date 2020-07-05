import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasPage } from './categorias.page';
import { ListaCategoriasPage } from './lista-categorias/lista-categorias.page';
import { InserirCategoriaPage } from './inserir-categoria/inserir-categoria.page';
import { EditarCategoriaPage } from './editar-categoria/editar-categoria.page';
import { DetalhesCategoriaPage } from './detalhes-categoria/detalhes-categoria.page';

const routes: Routes = [
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
  { path: 'categorias', component: ListaCategoriasPage },
  { path: 'lista-categorias', component: ListaCategoriasPage },
  { path: 'inserir-categoria', component: InserirCategoriaPage },
  { path: 'editar-categoria', component: EditarCategoriaPage },
  { path: 'detalhes-categoria', component: DetalhesCategoriaPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasPageRoutingModule {}
