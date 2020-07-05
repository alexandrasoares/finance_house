import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

import { LoadingService } from './../core/services/loading.service';
import { MensagemToastService } from './../core/services/mensagem-toast.service';
import { SubcategoriaService } from './../core/services/subcategoria.service';
import { Subcategoria } from './../core/models/subcategoria.model';
import { Movimento } from '../core/models/movimento.model';
import { Categoria } from '../core/models/categoria.model';
import { ListaMovimentosPage } from './../shared/lista-movimentos/lista-movimentos.page';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {

  subcategorias: Subcategoria[] = [];

  constructor(
    private subcategoriaService: SubcategoriaService,
    private navController: NavController,
    private toast: MensagemToastService,
    private modalController: ModalController,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.loadData();
  }

  detalhes(subcategoria: Subcategoria): void {
    this.navController.navigateForward(`/subcategorias/detalhes/${subcategoria.id}`);
  }

  editar(subcategoria: Subcategoria): void {
    this.navController.navigateForward(`/subcategorias/editar/${subcategoria.id}`);
  }

  remover(subcategoria: Subcategoria): void {
    this.subcategoriaService.delete(subcategoria.id).subscribe(() => {
      this.toast.showSuccessToast(`Subcategoria ${subcategoria.nome} removida com sucesso`);
      this.subcategorias.splice(this.subcategorias.indexOf(subcategoria), 1);
    });
  }

  showMovimentosModal(subcategoria: Subcategoria): void {
    this.subcategoriaService.getMovimentos(subcategoria.id).subscribe((dados: Movimento[]) => {
      this.modalController.create({
        component: ListaMovimentosPage,
        componentProps: {
          modal: true,
          movimentos: dados,
          emptyMovimentosMessage: 'Não há nenhum movimento nesta subcategoria'
        }
      }).then((modal) => modal.present());
    });
  }

  getSubcategoriasCredito(): Subcategoria[] {
    return this.subcategorias.filter((subcategoria: Subcategoria) => Categoria.isCredito(subcategoria.categoria));
  }

  getSubcategoriasDebito(): Subcategoria[] {
    return this.subcategorias.filter((subcategoria: Subcategoria) => !Categoria.isCredito(subcategoria.categoria));
  }

  private loadData(event: any = null): void {
    this.subcategoriaService.getAll().subscribe((dados: Subcategoria[]) => {
      this.subcategorias = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  hasSubcategorias(): boolean {
    return this.subcategorias.length > 0;
  }

}
