import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { Fatura } from './../../../core/models/fatura.model';

@Component({
  selector: 'app-lista-faturas',
  templateUrl: './lista-faturas.page.html',
  styleUrls: ['./lista-faturas.page.scss'],
})
export class ListaFaturasPage implements OnInit {

  @Input() faturas: Fatura[] = [];

  @Output() showMovimentosEvent = new EventEmitter<Fatura>();
  @Output() abrirFaturaEvent = new EventEmitter<Fatura>();
  @Output() fecharFaturaEvent = new EventEmitter<Fatura>();
  @Output() pagarFaturaEvent = new EventEmitter<Fatura>();


  constructor(
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  openOptionsDialog(fatura: Fatura): void {
    this.actionSheetController.create({
      header: 'Escolha uma opção',
      buttons: [
        {text: 'Movimentos', icon: 'list', handler: () => this.showMovimentosEvent.emit(fatura)},
        {text: 'Abrir', icon: 'folder-open', handler: () => this.abrirFaturaEvent.emit(fatura)},
        {text: 'Fechar', icon: 'folder', handler: () => this.fecharFaturaEvent.emit(fatura)},
        {text: 'Pagar', icon: 'cash', handler: () => this.pagarFaturaEvent.emit(fatura)}
      ]
    }).then((dialog) => dialog.present());
  }

  transformStatus(fatura: Fatura): string {
    return Fatura.transformStatus(fatura.status);
  }

}
