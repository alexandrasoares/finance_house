import { Movimento } from './../core/models/movimento.model';
import { ListaMovimentosPage } from './../shared/lista-movimentos/lista-movimentos.page';
import { MensagemToastService } from './../core/services/mensagem-toast.service';
import { CategoriaService } from './../core/services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading.service';
import { Categoria } from '../core/models/categoria.model';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias: Categoria[] = [];

  constructor(
    private loading: LoadingService,
    private categoriaService: CategoriaService,
    private navController: NavController,
    private toast: MensagemToastService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  private loadData(event: any = null): void {
    this.categoriaService.getAll().subscribe((dados: Categoria[]) => {
      this.categorias = dados;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  getCategoriasCredito(): Categoria[] {
    return this.categorias.filter((c: Categoria) => Categoria.isCredito(c));
  }

  getCategoriasDebito(): Categoria[] {
    return this.categorias.filter((c: Categoria) => !Categoria.isCredito(c));
  }

  detalhes(categoria: Categoria): void {
    this.navController.navigateForward(`/categorias/detalhes/${categoria.id}`);
  }

  editar(categoria: Categoria): void {
    this.navController.navigateForward(`/categorias/editar/${categoria.id}`);
  }

  remover(categoria: Categoria): void {
    this.categoriaService.delete(categoria.id).subscribe(() => {
      this.categorias.splice(this.categorias.indexOf(categoria), 1);
      this.toast.showSuccessToast(`Categoria ${categoria.nome} removida`);
    });
  }

  showMovimentosModal(categoria: Categoria): void {
    this.categoriaService.getMovimentos(categoria.id).subscribe((dados: Movimento[]) => {
      this.modalController.create({
        component: ListaMovimentosPage,
        componentProps: {
          modal: true,
          movimentos: dados,
          emptyMovimentosMessage: 'Não há nenhum movimento nesta categoria'
        }
      }).then((modal) => modal.present());
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  hasCategorias(): boolean {
    return this.categorias.length > 0;
  }

}
