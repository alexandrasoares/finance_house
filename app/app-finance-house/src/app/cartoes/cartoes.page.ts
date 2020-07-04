import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { MensagemToastService } from './../core/services/mensagem-toast.service';
import { CartaoService } from './../core/services/cartao.service';
import { Cartao } from './../core/models/cartao.model';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.page.html',
  styleUrls: ['./cartoes.page.scss'],
})
export class CartoesPage implements OnInit {

  cartoes: Cartao[] = [];

  constructor(
    private cartaoService: CartaoService,
    private navController: NavController,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData(event: any = null): void {
    this.cartaoService.getAll().subscribe((dados: Cartao[]) => {
      this.cartoes = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  editar(cartao: Cartao): void {
    this.navController.navigateForward(`/cartoes/editar/${cartao.id}`);
  }

  remover(cartao: Cartao): void {
    this.cartaoService.delete(cartao.id).subscribe(() => this.cartoes.splice(this.cartoes.indexOf(cartao), 1));
  }

  showFaturas(cartao: Cartao): void {
    this.navController.navigateForward(`/cartoes/detalhes/${cartao.id}/faturas`);
  }

  showMovimentosModal(cartao: Cartao): void {
    this.toast.showSuccessToast('Em desenvolvimento..');
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

}
