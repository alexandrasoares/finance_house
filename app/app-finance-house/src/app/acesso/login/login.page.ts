import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController, ModalController } from '@ionic/angular';

import { AutenticacaoModel } from './../../core/models/autenticacao.model';
import { Usuario } from './../../core/models/usuario.model';
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private navController: NavController,
    private authService: AuthService,
    private menuController: MenuController,
    private modalController: ModalController,
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit() {
    if (this.authService.getCredenciais() !== null){
      this.login();
    }
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  ionViewDidLeave() {
    this.menuController.enable(true);
  }

  login(): void {
    const credenciais: AutenticacaoModel = { loginOuEmail: this.loginOuEmail.value, senha: this.senha.value };

    this.authService.login(credenciais).subscribe((response: HttpResponse<Usuario>) => {
      this.authService.successfulLogin(response);

      if (this.lembrarSenha.value){
        this.authService.salvaCredenciais(credenciais);
      }

      this.navController.navigateRoot('/home');
      // this.toast.showToast(`Bem vindo(a), ${this.authService.getUsuarioLogado().nome.split(' ')[0]}!`, 2000)
    },
    (err: HttpErrorResponse) => {
      // if(err.status === 403){
      //   this.toast.showToast('Usuário ou senha incorretos')
      // } else {
      //   this.toast.showToast('Falha ao se comunicar com o servidor')
      // }

      this.loginForm.reset();
    });
  }

  // recuperarSenhaModal(): void {
  //   this.modalController.create({
  //     component: RecuperarSenhaComponent,
  //     componentProps: {
  //       'loginOuEmail': this.loginOuEmail.value
  //     }
  //   }).then((modal) => modal.present())
  // }

  private initForm(): void {
    const credenciaisSalvas: AutenticacaoModel = this.authService.getCredenciais();

    const loginOuEmail: string = (credenciaisSalvas !== null) ? credenciaisSalvas.loginOuEmail : '';
    const senha: string = (credenciaisSalvas !== null) ? credenciaisSalvas.senha : '';

    this.loginForm = this.fb.group({
      loginOuEmail: [loginOuEmail, Validators.required],
      senha: [senha, Validators.required],
      lembrarSenha: [true]
    });
  }

  get loginOuEmail() {
    return this.loginForm.get('loginOuEmail');
  }
  get senha() {
    return this.loginForm.get('senha');
  }
  get lembrarSenha() {
    return this.loginForm.get('lembrarSenha');
  }

}
