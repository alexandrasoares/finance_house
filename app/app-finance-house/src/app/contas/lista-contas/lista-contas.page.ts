import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';

import { Conta } from './../../core/models/conta.model';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.page.html',
  styleUrls: ['./lista-contas.page.scss'],
})
export class ListaContasPage implements OnInit {

  @Input() contas: Conta[] = [];

  @Output() editarEvent = new EventEmitter<Conta>();
  @Output() removerEvent = new EventEmitter<Conta>();
  @Output() showMovimentosEvent = new EventEmitter<Conta>();

  constructor(
    private alertController: AlertController,
    private actionSheet: ActionSheetController
  ) { }

  ngOnInit() {
  }

  isSaldoPositivo(conta: Conta): boolean {
    return conta.saldo > 0;
  }

  openOptionsDialog(conta: Conta): void {
    this.actionSheet.create({
      header: 'Escolha uma opção',
      buttons: [
        {text: 'Editar', icon: 'create', handler: () => this.editarEvent.emit(conta)},
        {text: 'Remover', icon: 'trash', handler: () => {
          this.alertController.create({
            header: 'Confirmar',
            message: `Deseja realmente excluir a conta ${conta.nome}?`,
            buttons: [
              { text: 'Não' },
              { text: 'Sim', handler: () => this.removerEvent.emit(conta) }
            ]
          }).then(alert => alert.present());
        }},
        {text: 'Movimentos', icon: 'list', handler: () => this.showMovimentosEvent.emit(conta)},
      ]
    }).then((action) => action.present());
  }

}
