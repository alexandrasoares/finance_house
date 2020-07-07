import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { SubcategoriaService } from './../../core/services/subcategoria.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { Categoria } from './../../core/models/categoria.model';
import { Subcategoria } from './../../core/models/subcategoria.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-subcategorias',
  templateUrl: './editar-subcategorias.page.html',
  styleUrls: ['./editar-subcategorias.page.scss'],
})
export class EditarSubcategoriasPage implements OnInit {

  subcategoriaForm: FormGroup;

  subcategoria: Subcategoria;
  categoriasDisponiveis: Categoria[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService,
    private activatedRoute: ActivatedRoute,
    private toast: MensagemToastService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  atualizar(): void {
    this.subcategoria.nome = this.nome.value;
    this.subcategoria.categoria = this.categoriasDisponiveis.find((c: Categoria) => c.id === this.categoria.value);

    this.subcategoriaService.update(this.subcategoria).subscribe(() => this.toast.showSuccessToast('Subcategoria atualizada'));
  }

  private loadData(): void {
    const subcategoriaId: number = this.activatedRoute.snapshot.params['id'];

    this.subcategoriaService.getById(subcategoriaId).subscribe((dados: Subcategoria) => {
      this.loadForm(dados);
      this.subcategoria = dados;
    });
  }

  // onTipoChanges(): void {
  //   if (this.tipo.value !== null){
  //     this.categoriaService.getAllByTipo(this.tipo.value).subscribe((dados: Categoria[]) => {
  //       this.categoriasDisponiveis = dados;
  //       this.categoria.enable();
  //     });
  //   }
  // }

  private initForm(): void {
    this.subcategoriaForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      categoria: [{value: '', disabled: true}]
    });
  }

  private loadForm(subcategoria: Subcategoria): void {
    this.nome.setValue(subcategoria.nome);
    this.tipo.setValue(subcategoria.categoria.tipo);
    this.categoria.setValue(subcategoria.categoria.id);
  }

  get nome() { return this.subcategoriaForm.get('nome'); }
  get tipo() { return this.subcategoriaForm.get('tipo'); }
  get categoria() { return this.subcategoriaForm.get('categoria'); }

}
