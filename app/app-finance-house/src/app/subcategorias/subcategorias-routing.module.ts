import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriasPage } from './subcategorias.page';
import { DetalhesSubcategoriasPage } from './detalhes-subcategorias/detalhes-subcategorias.page';
import { EditarSubcategoriasPage } from './editar-subcategorias/editar-subcategorias.page';
import { InserirSubcategoriasPage } from './inserir-subcategorias/inserir-subcategorias.page';
import { ListaSubcategoriasPage } from './lista-subcategorias/lista-subcategorias.page';

const routes: Routes = [
  { path: '', redirectTo: 'subcategorias', pathMatch: 'full' },
  { path: 'subcategorias', component: SubcategoriasPage },
  { path: 'lista-subcategorias', component: ListaSubcategoriasPage },
  { path: 'inserir-subcategorias', component: InserirSubcategoriasPage },
  { path: 'editar-subcategorias', component: EditarSubcategoriasPage },
  { path: 'detalhes-subcategorias', component: DetalhesSubcategoriasPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriasPageRoutingModule {}
