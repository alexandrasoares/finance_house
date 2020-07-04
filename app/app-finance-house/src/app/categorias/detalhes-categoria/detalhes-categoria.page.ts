import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { SubcategoriaService } from './../../core/services/subcategoria.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { Categoria } from './../../core/models/categoria.model';
@Component({
  selector: 'app-detalhes-categoria',
  templateUrl: './detalhes-categoria.page.html',
  styleUrls: ['./detalhes-categoria.page.scss'],
})
export class DetalhesCategoriaPage implements OnInit {

  detailsForm: FormGroup;
  categoria: Categoria;
  subcategorias: Subcategoria[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService,
    private navController: NavController,
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    const categoriaId: number = this.activatedRoute.snapshot.parent.params['id'];

    // Carrega dados da categoria
    this.categoriaService.getById(categoriaId).subscribe((dados: Categoria) => {
      this.loadForm(dados);
      this.categoria = dados;
    });

    // Carrega as subcategorias
    this.categoriaService.getSubcategorias(categoriaId).subscribe((dados: Subcategoria[]) => this.subcategorias = dados);
  }

  hasSubcategorias(): boolean {
    return this.subcategorias.length > 0;
  }

  removerSubcategoria(subcategoria: Subcategoria): void {
    this.subcategoriaService.delete(subcategoria.id).subscribe(() =>
      this.subcategorias.splice(this.subcategorias.indexOf(subcategoria), 1)
    );
  }

  editarSubcategoria(subcategoria: Subcategoria): void {
    this.navController.navigateForward(`/subcategorias/editar/${subcategoria.id}`);
  }

  private initForm(): void {
    this.detailsForm = this.fb.group({
      nome: [{ value: '', disabled: true }],
      tipo: [{ value: '', disabled: true }],
      editavel: [{ value: '', disabled: true }]
    });
  }

  private loadForm(categoria: Categoria): void {
    this.nome.setValue(categoria.nome);
    this.tipo.setValue((Categoria.isCredito(categoria) ? 'Crédito' : 'Débito'));
    this.editavel.setValue(categoria.editavel);
  }

  get nome() { return this.detailsForm.get('nome'); }
  get tipo() { return this.detailsForm.get('tipo'); }
  get editavel() { return this.detailsForm.get('editavel'); }
}
