import { Usuario } from './../../core/models/usuario.model';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { MovimentoService } from './../../core/services/movimento.service';
import { Movimento } from './../../core/models/movimento.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-contribuintes',
  templateUrl: './lista-contribuintes.page.html',
  styleUrls: ['./lista-contribuintes.page.scss'],
})
export class ListaContribuintesPage implements OnInit {

  @Input() modal = false;
  @Input() usuario: Usuario[] = [];
  @Input() emptyMovimentosMessage = 'Não há registro nesta conta';

  constructor(
    private modalController: ModalController,
    private navController: NavController,
    private movimentoService: MovimentoService,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  closeModal(): void {
    if (this.modal){
      this.modalController.dismiss();
    }
  }

  hasMovimentos(): boolean {
    return this.usuario.length !== 0;
  }


  editar(movto: Movimento): void {
    this.closeModal();
    this.navController.navigateForward(`/movimentos/editar/${movto.id}`);
  }

  remover(movto: Movimento): void {
    this.movimentoService.delete(movto.id).subscribe(() => {
      this.usuario.splice(this.usuario.indexOf(movto), 1);
      this.toast.showSuccessToast('Familiar removido com sucesso');
    });
  }

}
