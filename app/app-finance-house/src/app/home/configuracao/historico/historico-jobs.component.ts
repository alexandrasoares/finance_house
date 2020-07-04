import { DataService } from './../../../core/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { MensagemToastService } from './../../../core/services/mensagem-toast.service';
import { TaskService } from './../../../core/services/task.service';
import { Task, sortByDataExecucaoDesc } from './../../../core/models/task.model';

@Component({
  selector: 'app-historico-jobs',
  templateUrl: './historico-jobs.component.html'
})
export class HistoricoJobsComponent implements OnInit {

  modal = true;
  showSomenteHoje = false;

  @Input() tasks: Task[] = [];
  tasksVisiveis: Task[] = [];

  constructor(
      private modalController: ModalController,
      private alertController: AlertController,
      private taskService: TaskService,
      private toast: MensagemToastService
    ) { }

  ngOnInit() {}

  ionViewWillEnter() {
   this.tasks = this.tasks.sort(sortByDataExecucaoDesc);
   this.tasksVisiveis = this.tasks;
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  executar(task: Task): void {
    this.alertController.create({
      header: 'Atenção',
      message: `Deseja realmente executar o job <strong>${task.nome}</strong>?`,
      buttons: [
        { text: 'Cancelar' },
        { text: 'Confirmar', handler: () => {
          this.taskService.executa(task.nome).subscribe(() => this.toast.showSuccessToast('Job executado com sucesso'));
        }}
      ]
    }).then((alert) => alert.present());
  }

  onFiltroChanges(event: any): void {
    this.showSomenteHoje = !this.showSomenteHoje;

    if (this.showSomenteHoje) {
      const today = DataService.toApiPattern(DataService.getNowAsJson());
      this.tasksVisiveis = this.tasks.filter((task: Task) => DataService.toApiPattern(task.dataExecucao) === today);
    } else {
      this.tasksVisiveis = this.tasks;
    }
  }
}
