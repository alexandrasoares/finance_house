import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { LoadingService } from './../../core/services/loading.service';
import { TaskService } from './../../core/services/task.service';
import { APP_CONFIG } from './../../app.config';
import { Task } from './../../core/models/task.model';
import { HistoricoJobsComponent } from './historico/historico-jobs.component';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private taskService: TaskService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  setNovaChaveHgBrasil(): void {
    this.alertController.create({
      header: 'Novo valor',
      inputs: [
        { name: 'novaChave', type: 'text', value: APP_CONFIG.externalsApis.hgBrasil.key, placeholder: 'Nova chave' }
      ],
      buttons: [
        { text: 'Cancelar' },
        { text: 'Salvar', handler: (inputData) => {
          localStorage.setItem(APP_CONFIG.externalsApis.hgBrasil.localStorageAddress, inputData.novaChave);
          APP_CONFIG.externalsApis.hgBrasil.key = inputData.novaChave;
        }}
      ]
    }).then((alert) => alert.present());
  }

  showHistoricoJobs(): void {
    this.loading.showLoading('Recuperando dados..');

    this.taskService.getAll().subscribe((dados: Task[]) => {
      this.loading.dismissLoading();

      this.modalController.create({
        component: HistoricoJobsComponent,
        componentProps: {
          tasks: dados
        }
      }).then((modal) => modal.present());
    });
  }

}
