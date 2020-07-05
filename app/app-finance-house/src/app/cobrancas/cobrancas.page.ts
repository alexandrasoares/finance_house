import { Cobranca } from './../core/models/cobranca.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CobrancaService } from '../core/services/cobranca.service';

@Component({
  selector: 'app-cobrancas',
  templateUrl: './cobrancas.page.html',
  styleUrls: ['./cobrancas.page.scss'],
})
export class CobrancasPage implements OnInit {

  cobrancas: Cobranca[] = [];
  cobrancasFiltradas: Cobranca[] = [];

  constructor(
    private cobrancaService: CobrancaService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData(event: any = null): void {
    this.cobrancaService.getAll().subscribe((dados: Cobranca[]) => {
      this.cobrancas = dados.sort(Cobranca.sortByDataVencimento);
      this.cobrancasFiltradas = this.cobrancas;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  onFiltroChange(event: any): void {
    const valor: string = event.detail.value;

    switch (valor) {
      case 'pendente':
        this.cobrancasFiltradas = this.cobrancas.filter((c: Cobranca) => c.status === 'PENDENTE' || c.status === 'PAGO_PARCIAL');
        break;
      case 'agendado':
        this.cobrancasFiltradas = this.cobrancas.filter((c: Cobranca) => c.status === 'AGENDADO');
        break;
      case 'pago':
        this.cobrancasFiltradas = this.cobrancas.filter((c: Cobranca) => c.status === 'PAGO');
        break;
      // tslint:disable-next-line:no-unused-expression
      default: '';
    }
  }

  detalhes(cobranca: Cobranca): void {
    this.navController.navigateForward(`/cobrancas/detalhes/${cobranca.id}`);
  }

  editar(cobranca: Cobranca): void {
    this.navController.navigateForward(`/cobrancas/editar/${cobranca.id}`);
  }

  remover(cobranca: Cobranca): void {
    this.navController.navigateForward(`/cobrancas/remover/${cobranca.id}`);
  }

  showOperacoesModal(cobranca: Cobranca): void {

  }

  pagar(cobranca: Cobranca): void {
    this.navController.navigateForward(`/cobrancas/pagar/${cobranca.id}`);
  }

}
