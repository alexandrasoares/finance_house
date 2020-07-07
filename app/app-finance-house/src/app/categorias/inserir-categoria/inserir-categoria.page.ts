import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Categoria } from './../../core/models/categoria.model';
import { CategoriaDTO } from './../../core/models/categoria.dto';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CategoriaService } from './../../core/services/categoria.service';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.page.html',
  styleUrls: ['./inserir-categoria.page.scss'],
})
export class InserirCategoriaPage implements OnInit {

  categoriaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private toast: MensagemToastService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm(): void {
    this.categoriaForm = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators],
    });
  }

  inserir(): void {
    const categoria: CategoriaDTO = { nome: this.nome.value, tipo: this.tipo.value};

    this.categoriaService.insert(categoria).subscribe((categoriaGerada: Categoria) => {
      this.router.navigate(['/categorias'], { replaceUrl: true});
      this.toast.showSuccessToast(`Categoria ${categoria.nome} salva`);
      this.categoriaForm.reset();
    });
  }

  get nome() { return this.categoriaForm.get('nome'); }
  get tipo() { return this.categoriaForm.get('tipo'); }

}
