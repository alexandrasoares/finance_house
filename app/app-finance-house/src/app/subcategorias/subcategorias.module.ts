import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoriasPageRoutingModule } from './subcategorias-routing.module';

import { SubcategoriasPage } from './subcategorias.page';
import { SharedModule } from '../shared/shared.module';
import { DetalhesSubcategoriasPage } from './detalhes-subcategorias/detalhes-subcategorias.page';
import { EditarSubcategoriasPage } from './editar-subcategorias/editar-subcategorias.page';
import { InserirSubcategoriasPage } from './inserir-subcategorias/inserir-subcategorias.page';
import { ListaSubcategoriasPage } from './lista-subcategorias/lista-subcategorias.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SubcategoriasPageRoutingModule
  ],
  declarations: [
    SubcategoriasPage,
    ListaSubcategoriasPage,
    InserirSubcategoriasPage,
    EditarSubcategoriasPage,
    DetalhesSubcategoriasPage
  ]
})
export class SubcategoriasPageModule {}
