import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  abrirTelaLogin() {
    this.router.navigate(['acesso/login']);
  }

  abrirTelaCadastro() {
    this.router.navigate(['acesso/cadastro-usuario']);
  }
}
