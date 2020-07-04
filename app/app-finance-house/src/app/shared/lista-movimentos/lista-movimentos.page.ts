import { DataService } from './../../core/services/data.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { MovimentoService } from './../../core/services/movimento.service';
import { Movimento } from './../../core/models/movimento.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-movimentos',
  templateUrl: './lista-movimentos.page.html',
  styleUrls: ['./lista-movimentos.page.scss'],
})
export class ListaMovimentosPage implements OnInit {

  @Input() modal = false;
  @Input() movimentos: Movimento[] = [];
  @Input() emptyMovimentosMessage = 'Não há movimentação nesta conta';

  constructor(
    private modalController: ModalController,
    private navController: NavController,
    private movimentoService: MovimentoService,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Ordena os movimentos por data de contabilização (do mais recente para o mais antigo)
    this.movimentos = this.movimentos.sort(Movimento.sortByDataContabilizacaoDesc);
  }

  closeModal(): void {
    if (this.modal){
      this.modalController.dismiss();
    }
  }

  hasMovimentos(): boolean {
    return this.movimentos.length !== 0;
  }

  detalhes(movto: Movimento): void {
    this.closeModal();
    this.navController.navigateForward(`/movimentos/detalhes/${movto.id}`);
  }

  editar(movto: Movimento): void {
    this.closeModal();
    this.navController.navigateForward(`/movimentos/editar/${movto.id}`);
  }

  remover(movto: Movimento): void {
    this.movimentoService.delete(movto.id).subscribe(() => {
      this.movimentos.splice(this.movimentos.indexOf(movto), 1);
      this.toast.showSuccessToast('Movimento removido com sucesso');
    });
  }

  clonar(movto: Movimento): void {
    const novoMovimento = Object.assign({}, movto);

    novoMovimento.id = null;
    novoMovimento.dataContabilizacao = DataService.toApiPattern(DataService.getNowAsJson());

    this.movimentoService.insert(novoMovimento).subscribe((dados: Movimento) =>
      this.toast.showSuccessToast('Movimento clonado com sucesso')
    );
  }

  alterarValor(obj: { old: Movimento, new: Movimento }): void {
    if (obj.old.valor !== obj.new.valor){
      this.movimentoService.update(obj.new).subscribe(() => {
        this.toast.showSuccessToast(`Valor atualizado`);

        obj.old.valor = obj.new.valor;
        obj.old.valorTotal = Movimento.getValorTotal(obj.new);
      });
    } else {
      this.toast.showErrorToast('Não é necessário alterar pois os valores são iguais');
    }
  }

}
