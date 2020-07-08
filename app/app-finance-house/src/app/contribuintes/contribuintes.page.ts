import { Usuario } from './../core/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../core/services/cadastro.service';
import { MensagemToastService } from '../core/services/mensagem-toast.service';

@Component({
  selector: 'app-contribuintes',
  templateUrl: './contribuintes.page.html',
  styleUrls: ['./contribuintes.page.scss'],
})
export class ContribuintesPage implements OnInit {

  usuario: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];

  isLoading = true;
  isFiltroRapidoAtivo = false;

  private paginaAtual = 0;


  constructor(
    private movimentoService: CadastroService,
    private toast: MensagemToastService,
    private cadastroService: CadastroService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.paginaAtual = 0;
    this.usuario = [];
    this.usuariosFiltrados = [];
  }

}
