import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { Beneficiario } from './../../core/models/beneficiario.model';

@Component({
  selector: 'app-lista-beneficiario',
  templateUrl: './lista-beneficiario.page.html',
  styleUrls: ['./lista-beneficiario.page.scss'],
})
export class ListaBeneficiarioPage implements OnInit {

  @Input() beneficiarios: Beneficiario[] = [];

  @Output() detalhesEventEmitter = new EventEmitter<Beneficiario>();
  @Output() editarEventEmitter = new EventEmitter<Beneficiario>();
  @Output() removerEventEmitter = new EventEmitter<Beneficiario>();
  @Output() visualizarCobrancas = new EventEmitter<Beneficiario>();

  constructor(
    private actionSheet: ActionSheetController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  hasBanco(beneficario: Beneficiario): boolean {
    return Beneficiario.hasBanco(beneficario);
  }

  hasAgencia(beneficario: Beneficiario): boolean {
    return Beneficiario.hasAgencia(beneficario);
  }

  hasConta(beneficario: Beneficiario): boolean {
    return Beneficiario.hasConta(beneficario);
  }

  openOptionsDialog(beneficario: Beneficiario): void {
    this.actionSheet.create({
      header: 'Escolha uma opção',
      buttons: [
        { text: 'Detalhes', icon: 'eye', handler: () => this.detalhesEventEmitter.emit(beneficario) },
        { text: 'Editar', icon: 'create', handler: () => this.editarEventEmitter.emit(beneficario) },
        {
          text: 'Remover', icon: 'trash', handler: () => {
            this.alertController.create({
              header: 'Confirmar',
              message: 'Deseja realmente excluir este beneficiário?',
              buttons: [
                { text: 'Não' },
                { text: 'Sim', handler: () => this.removerEventEmitter.emit(beneficario) }
              ]
            }).then(alert => alert.present());
          }
        },
        // { text: 'Cobranças', icon: 'list', handler: () => this.visualizarCobrancas.emit(beneficario) },
      ]
    }).then((actionSheet) => actionSheet.present());
  }

}
