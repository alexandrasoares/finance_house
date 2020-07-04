import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasPageRoutingModule } from './categorias-routing.module';

import { CategoriasPage } from './categorias.page';
import { DetalhesCategoriaPage } from './detalhes-categoria/detalhes-categoria.page';
import { EditarCategoriaPage } from './editar-categoria/editar-categoria.page';
import { InserirCategoriaPage } from './inserir-categoria/inserir-categoria.page';
import { SharedModule } from '../shared/shared.module';
import { ListaCategoriasPage } from './lista-categorias/lista-categorias.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CategoriasPageRoutingModule
  ],
  declarations: [
    CategoriasPage,
    DetalhesCategoriaPage,
    InserirCategoriaPage,
    EditarCategoriaPage,
    ListaCategoriasPage
  ]
})
export class CategoriasPageModule {}
