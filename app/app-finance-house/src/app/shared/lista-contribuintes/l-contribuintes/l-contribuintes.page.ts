import { Movimento } from './../../../core/models/movimento.model';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { ContribuinteModel } from 'src/app/core/models/contribuinte.model';

@Component({
  selector: 'app-l-contribuintes',
  templateUrl: './l-contribuintes.page.html',
  styleUrls: ['./l-contribuintes.page.scss'],
})
export class LContribuintesPage implements OnInit {

  @Input() crt: ContribuinteModel[];

  @Output() detalhesEventEmitter = new EventEmitter<ContribuinteModel>();
  @Output() editarEventEmitter = new EventEmitter<ContribuinteModel>();
  @Output() removerEventEmitter = new EventEmitter<ContribuinteModel>();
  @Output() clonarEventEmitter = new EventEmitter<ContribuinteModel>();
  @Output() alterarValorEventEmitter = new EventEmitter<{ old: ContribuinteModel, new: ContribuinteModel }>();

  constructor(
    private actionSheet: ActionSheetController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  usuario(crt: ContribuinteModel): boolean {
    return ContribuinteModel.usuario(crt);
  }

  valorDividido(ctr: ContribuinteModel): boolean {
    return ContribuinteModel.valorDividido(ctr);
  }

  movimento(ctr: ContribuinteModel): boolean {
    return ContribuinteModel.movimento(ctr);
  }

  openOptionsDialog(crt: ContribuinteModel): void {
    this.actionSheet.create({
      header: 'Escolha uma opção',
      buttons: [
        { text: 'Detalhes', icon: 'eye', handler: () => this.detalhesEventEmitter.emit(crt) },
        { text: 'Editar', icon: 'create', handler: () => this.editarEventEmitter.emit(crt) },
        {
          text: 'Remover', icon: 'trash', handler: () => {
            this.alertController.create({
              header: 'Confirmar',
              message: 'Deseja realmente excluir este movimento?',
              buttons: [
                { text: 'Não' },
                { text: 'Sim', handler: () => this.removerEventEmitter.emit(crt) }
              ]
            }).then(alert => alert.present());
          }
        },
        { text: 'Clonar', icon: 'copy', handler: () => {
          this.alertController.create({
            header: 'Confirmar',
            message: 'Deseja realmente clonar este registo? Um registro idêntico será gerado com a data de hoje',
            buttons: [
              { text: 'Não' },
              { text: 'Sim', handler: () => this.clonarEventEmitter.emit(crt) }
            ]
          }).then(alert => alert.present());
        }},
      ]
    }).then((actionSheet) => actionSheet.present());
  }


}
