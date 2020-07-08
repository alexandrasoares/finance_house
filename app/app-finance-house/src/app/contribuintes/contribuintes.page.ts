import { CadastroService } from './../core/services/cadastro.service';
import { ContribuinteModel } from './../core/models/contribuinte.model';
import { Component, OnInit, Output } from '@angular/core';
import _ from 'lodash';
import { Usuario } from '../core/models/usuario.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-contribuintes',
  templateUrl: './contribuintes.page.html',
  styleUrls: ['./contribuintes.page.scss'],
})
export class ContribuintesPage implements OnInit {
  item: string;
  usuario: Array<{
    nome: string,
    email: string
  }>;
  queryText: string;
  todosUsuarios: any;

  constructor(
    private usuarioService: CadastroService
  ) {
    this.queryText = '';
    this.usuario = [
      {
        nome: 'Alexandra Soares',
        email: 'ale@soares.com',
      },
      {
        nome: 'Fabio Soares',
        email: 'fabio@soares.com',
      },
      {
        nome: 'Paola Soares',
        email: 'paola@soares.com',
      },
      {
        nome: 'Edvaldo Henrique',
        email: 'ed@henrique.com',
      },
    ];

    this.todosUsuarios = this.usuario;


  }

  ngOnInit() {
  }

  listarUsuario(user: any) {
    const item = user.target.value;

    if (item && item.trim() !== '') {
      this.usuario = _.values(this.todosUsuarios);
      this.usuario = this.usuario.filter((u) => {
        return (u.email.toLowerCase().indexOf(item.toLowerCase()) > -1);
      });
    } else {
      this.usuario = this.todosUsuarios;
    }
  }

}
