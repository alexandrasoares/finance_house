import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { Conta } from '../core/models/conta.model';
import { ContaService } from '../core/services/conta.service';
import { LoadingService } from '../core/services/loading.service';
import { Movimento } from '../core/models/movimento.model';
import { ListaMovimentosPage } from '../shared/lista-movimentos/lista-movimentos.page';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {

  contas: Conta[] = [];

  constructor(
    private contaService: ContaService,
    private navController: NavController,
    private modalController: ModalController,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData(event: any = null): void {
    this.contaService.getAll().subscribe((dados: Conta[]) => {
      this.contas = dados;
      if (event !== null){
        event.target.complete();
      }
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  editar(conta: Conta): void {
    this.navController.navigateForward(`contas/editar/${conta.id}`);
  }

  remover(conta: Conta): void {
    this.contaService.delete(conta.id).subscribe(() => this.contas.splice(this.contas.indexOf(conta), 1));
  }

  showMovimentosModal(conta: Conta): void {
    this.loading.showLoading('Carregando..');

    this.contaService.getMovimentos(conta.id).subscribe((dados: Movimento[]) => {
      this.loading.dismissLoading();

      this.modalController.create({
        component: ListaMovimentosPage,
        componentProps: {
          movimentos: dados,
          modal: true,
          header: ''
        }
      }).then((modal) => modal.present());
    });
  }


}
