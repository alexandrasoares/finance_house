import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SubcategoriaDTO } from './../../core/models/subcategoria.dto';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { SubcategoriaService } from './../../core/services/subcategoria.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { Categoria } from './../../core/models/categoria.model';

@Component({
  selector: 'app-inserir-subcategorias',
  templateUrl: './inserir-subcategorias.page.html',
  styleUrls: ['./inserir-subcategorias.page.scss'],
})
export class InserirSubcategoriasPage implements OnInit {

  subcategoriaForm: FormGroup;
  categoriasDisponiveis: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService,
    private toast: MensagemToastService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  // onTipoChanges(): void {
  //   if (this.tipo.value !== null){
  //     this.categoriaService.getAllByTipo(this.tipo.value).subscribe((dados: Categoria[]) => {
  //       this.categoriasDisponiveis = dados;
  //       this.categoria.enable();
  //     });
  //   }
  // }

  inserir(): void {
    const subcategoria: SubcategoriaDTO = {
      nome: this.nome.value,
      categoria: this.categoriasDisponiveis.find((c: Categoria) => c.id === this.categoria.value)
    };

    this.subcategoriaService.insert(subcategoria).subscribe((dados: Subcategoria) => {
      this.router.navigate(['/subcategorias'], { replaceUrl: true });

      this.toast.showSuccessToast(`Subcategoria ${dados.nome} criada com sucesso`);
      this.subcategoriaForm.reset();
    });
  }

  private initForm(): void {
    this.subcategoriaForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      categoria: [{value: '', disabled: true}]
    });
  }

  get nome() { return this.subcategoriaForm.get('nome'); }
  get tipo() { return this.subcategoriaForm.get('tipo'); }
  get categoria() { return this.subcategoriaForm.get('categoria'); }

}
