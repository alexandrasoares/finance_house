import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { FaturaService } from './../../core/services/fatura.service';
import { LoadingService } from './../../core/services/loading.service';
import { CartaoService } from './../../core/services/cartao.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { Fatura } from './../../core/models/fatura.model';
import { InserirFaturaPage } from './inserir-fatura/inserir-fatura.page';
import { Cartao } from './../../core/models/cartao.model';
import { PagarFaturaPage } from './pagar-fatura/pagar-fatura.page';
import { Movimento } from './../../core/models/movimento.model';
import { ListaMovimentosPage } from './../../shared/lista-movimentos/lista-movimentos.page';
@Component({
  selector: 'app-faturas',
  templateUrl: './faturas.page.html',
  styleUrls: ['./faturas.page.scss'],
})
export class FaturasPage implements OnInit {

  faturas: Fatura[] = [];
  faturasFiltradas: Fatura[] = [];

  headerName = 'Faturas';
  saldoRestantePercentual = 0.0;
  saldoRestante = 0.0;
  firstLoading  = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartaoService: CartaoService,
    private faturaService: FaturaService,
    private toast: MensagemToastService,
    private modalController: ModalController,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData(event: any = null): void {
    const cartaoId: number = this.activatedRoute.snapshot.params['id'];

    this.cartaoService.getFaturas(cartaoId).subscribe((dados: Fatura[]) => {
      this.faturas = dados;
      this.faturasFiltradas = this.firstLoading ? dados : this.faturasFiltradas;

      if (this.hasFaturas()) {
        this.headerName = dados[0].cartao.nome;
        this.saldoRestantePercentual = this.calculaPercentualSaldoRestante(dados[0].cartao, dados);
        this.saldoRestante = this.calculaSaldoRestante(dados[0].cartao, dados);
      }

      if (event !== null) {
        event.target.complete();
      }

      this.firstLoading = false;
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  showSaldoRestante(): void {
    this.toast.showSuccessToast(`Saldo restante: ${this.saldoRestante.toFixed(2)}`);
  }

  /**
   * Evento responsável por aplicar o filtro escolhido pelo usuário
   * @param event ;
   */
  onFiltroChange(event: any): void {
    const filtro: string = event.detail.value;

    switch (filtro) {
      case 'nao-fechado':
        this.faturasFiltradas = this.faturas.filter((f: Fatura) => f.status === 'NAO_FECHADA');
        break;
      case 'a-pagar':
        this.faturasFiltradas = this.faturas.filter((f: Fatura) => f.status === 'PENDENTE' || f.status === 'PAGO_PARCIAL');
        break;
      case 'pago':
        this.faturasFiltradas = this.faturas.filter((f: Fatura) => f.status === 'PAGO');
    }
  }

  private calculaPercentualSaldoRestante(cartao: Cartao, faturas: Fatura[]): number {
    let limiteRestante: number = cartao.limite;
    faturas.forEach((f: Fatura) => limiteRestante -= (f.valor - f.valorPago));

    return limiteRestante / cartao.limite;
  }

  private calculaSaldoRestante(cartao: Cartao, faturas: Fatura[]): number {
    let limiteRestante: number = cartao.limite;
    faturas.forEach((f: Fatura) => limiteRestante -= (f.valor - f.valorPago));

    return limiteRestante;
  }

  hasFaturas(): boolean {
    return this.faturas.length > 0;
  }

  showInserirFaturaModal(): void {
    this.modalController.create({
      component: InserirFaturaPage,
      componentProps: {
        cartaoid: this.activatedRoute.snapshot.params['id']
      }
    }).then((modal) => {
      modal.present();
      // tslint:disable-next-line:no-shadowed-variable
      modal.onDidDismiss().then((modal) => {
        if (modal.data !== null) {
          this.faturas.push(modal.data);
        }
      });
    });
  }

  showMovimentosModal(fatura: Fatura): void {
    this.loading.showLoading();

    this.faturaService.getMovimentos(fatura.id).subscribe((dados: Movimento[]) => {
      this.loading.dismissLoading();

      this.modalController.create({
        component: ListaMovimentosPage,
        componentProps: {
          movimentos: dados,
          modal: true,
          emptyMovimentosMessage: 'Não há movimentos nesta fatura'
        }
      }).then((modal) => modal.present());
    });
  }

  abrirFatura(fatura: Fatura): void {
    this.faturaService.open(fatura.id).subscribe(() => {
      fatura.status = 'NAO_FECHADA';
      this.toast.showInfoToast(`Fatura ${fatura.referencia} aberta`);
    });
  }

  fecharFatura(fatura: Fatura): void {
    this.faturaService.close(fatura.id).subscribe(() => {
      fatura.status = 'PENDENTE';
      this.toast.showInfoToast(`Fatura ${fatura.referencia} fechada`);
    });
  }

  pagarFatura(fatura: Fatura): void {
    this.modalController.create({
      component: PagarFaturaPage,
      componentProps: {
        fatura
      }
    }).then((modal) => modal.present());
  }

}
