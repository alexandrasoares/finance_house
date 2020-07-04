import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from './../../core/models/usuario.model';
import { UsuarioDTO } from './../../core/usuario.dto';
import { DefaultComponentBase } from './../../config/default-component.base';
import { CadastroService } from './../../core/services/cadastro.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage extends DefaultComponentBase implements OnInit, OnDestroy {
  cadastroForm: FormGroup;
  model: Usuario;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private toast: MensagemToastService,
    private router: Router,
  ) {
    super();
    this.model = new Usuario();
    this.configurarFormularioCadastro();
  }

  ngOnInit() {
    this.componenteAtivo = true;
    console.log('show me your model', this.model);
  }

  ngOnDestroy(): void {
    this.componenteAtivo = false;
  }

  configurarFormularioCadastro() {
    this.cadastroForm = this.fb.group({
      nome: new FormControl(this.model.nome, Validators.required),
      email: new FormControl(this.model.email, Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      senha: new FormControl(this.model.senha, Validators.required),
    });
  }

  cadastrarUsuario() {
    const usuario: UsuarioDTO = {
      nome: this.nome.value,
      email: this.email.value,
      senha: this.senha.value,
    };

    this.cadastroService.insert(usuario).subscribe((dados: Usuario) => {
      this.cadastroForm.reset();
      this.router.navigate(['/home'], { replaceUrl: true });
      this.toast.showSuccessToast(`Bem vindo ${usuario.nome}!, sua conta foi criada com sucesso!`);
      console.log('model inside', usuario);
      console.log('model inside dados', dados);
    });
  }

  get nome() { return this.cadastroForm.get('nome'); }
  get email() { return this.cadastroForm.get('email'); }
  get senha() { return this.cadastroForm.get('senha'); }

}
