import { EditarTipoContaPage } from './editar-tipo-conta/editar-tipo-conta.page';
import { InserirTipoContaPage } from './inserir-tipo-conta/inserir-tipo-conta.page';
import { TipoConta } from './../core/models/tipo-conta.model';
import { Component, OnInit } from '@angular/core';
import { TipoContaService } from '../core/services/tipo-conta.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tipos-conta',
  templateUrl: './tipos-conta.page.html',
  styleUrls: ['./tipos-conta.page.scss'],
})
export class TiposContaPage implements OnInit {

  tiposConta: TipoConta[] = [];

  constructor(
    private tipoContaService: TipoContaService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData(event: any = null): void {
    this.tipoContaService.getAll().subscribe((dados: TipoConta[]) => {
      this.tiposConta = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  showInserirTipoContaModal(): void {
    this.modalController.create({
      component: InserirTipoContaPage
    }).then((modal) => modal.present());
  }

  showEditarTipoContaModal(tipoConta: TipoConta): void {
    this.modalController.create({
      component: EditarTipoContaPage,
      componentProps: {
        tipoConta
      }
    }).then((modal) => modal.present());
  }

  removerTipoConta(tipoConta: TipoConta): void {
    this.tipoContaService.delete(tipoConta.id).subscribe(() => this.tiposConta.splice(this.tiposConta.indexOf(tipoConta)));
  }

}
