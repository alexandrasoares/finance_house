import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { TipoConta } from './../../core/models/tipo-conta.model';

@Component({
  selector: 'app-lista-tipo-conta',
  templateUrl: './lista-tipo-conta.page.html',
  styleUrls: ['./lista-tipo-conta.page.scss'],
})
export class ListaTipoContaPage implements OnInit {

  @Input() tiposConta: TipoConta[] = [];

  @Output() editarTipoContaEvent = new EventEmitter<TipoConta>();
  @Output() removerTipoContaEvent = new EventEmitter<TipoConta>();


  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  editar(tipoConta: TipoConta): void {
    this.editarTipoContaEvent.emit(tipoConta);
  }

  remover(tipoConta: TipoConta): void {
    this.alertController.create({
      header: 'Confirmar',
      message: `Deseja realmente excluir o tipo ${tipoConta.nome}?`,
      buttons: [
        { text: 'Não' },
        { text: 'Sim', handler: () => this.removerTipoContaEvent.emit(tipoConta) }
      ]
    }).then(alert => alert.present());
  }
}
