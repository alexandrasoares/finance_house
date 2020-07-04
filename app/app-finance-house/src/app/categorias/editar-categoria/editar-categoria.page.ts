import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CategoriaService } from './../../core/services/categoria.service';
import { Categoria } from './../../core/models/categoria.model';
@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.page.html',
  styleUrls: ['./editar-categoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {

  editForm: FormGroup;
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private toast: MensagemToastService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  atualizar(): void {
    this.categoria.nome = this.nome.value;
    this.categoria.tipo = this.tipo.value;

    this.categoriaService.update(this.categoria).subscribe(() => this.toast.showSuccessToast('Categoria atualizada'));
  }

  private loadData(): void {
    const categoriaId: number = this.activatedRoute.snapshot.parent.params['id'];

    this.categoriaService.getById(categoriaId).subscribe((dados: Categoria) => {
      this.loadForm(dados);
      this.categoria = dados;
    });
  }

  private initForm(): void {
    this.editForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  private loadForm(categoria: Categoria): void {
    this.nome.setValue(categoria.nome);
    this.tipo.setValue(categoria.tipo);
  }

  get nome() { return this.editForm.get('nome'); }
  get tipo() { return this.editForm.get('tipo'); }

}
