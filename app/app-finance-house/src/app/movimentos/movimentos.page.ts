import { Component, OnInit } from '@angular/core';

import { Movimento } from '../core/models/movimento.model';
import { MovimentoService } from '../core/services/movimento.service';
import { MensagemToastService } from '../core/services/mensagem-toast.service';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-movimentos',
  templateUrl: './movimentos.page.html',
  styleUrls: ['./movimentos.page.scss'],
})
export class MovimentosPage implements OnInit {

  movimentos: Movimento[] = [];
  movimentosFiltrados: Movimento[] = [];

  isLoading = true;
  isFiltroRapidoAtivo = false;

  private paginaAtual = 0;

  constructor(
    private movimentoService: MovimentoService,
    private toast: MensagemToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.paginaAtual = 0;
    this.movimentos = [];
    this.movimentosFiltrados = [];

    this.loadData(false);
  }

  loadData(concatData: boolean, event: any = null): void {
    this.isLoading = true;

    this.movimentoService.getAll(this.paginaAtual).subscribe((dados: Movimento[]) => {

      if (concatData) {
        this.movimentos = this.movimentos.concat(dados);
        this.movimentosFiltrados = this.movimentos;
      } else {
        this.movimentos = dados;
        this.movimentosFiltrados = dados;
      }

      this.isLoading = false;
      this.isFiltroRapidoAtivo = false;

      if (event !== null){
        event.target.complete();
      }
    });
  }

  onSearch(event: any): void {
    const valor: string = event.detail.value;

    if (valor.trim().length === 0){
      this.resetFiltro();
    } else {
      this.movimentosFiltrados = this.movimentos.filter((m: Movimento) =>
        m.descricao.toLocaleLowerCase()
        .includes(valor.toLocaleLowerCase()) || m.valor.toString() === valor || m.dataContabilizacao === valor
      );
    }
  }

  resetFiltro(): void {
    this.movimentosFiltrados = this.movimentos;
  }

  doRefresh(event: any): void {
    this.loadData(false, event);
  }

  hasMovimentos(): boolean {
    return this.movimentos.length > 0;
  }

  carregarMais(): void {
    this.paginaAtual += 1;
    this.loadData(true);
  }

  filtraPorPeriodo(acao: string): void {
    let range: {month: number, minDate: string, maxDate: string };
    const year = DataService.getYear();

    if (acao === 'mesPassado') {
      range = DataService.getMonthRange(DataService.getMomentMonth() - 1, year);
      this.toast.showSuccessToast('Exibindo os movimentos bancários do mês passado');
    } else if (acao === 'esteMes') {
      range = DataService.getMonthRange(DataService.getMomentMonth(), year);
      this.toast.showSuccessToast('Exibindo os movimentos bancários deste mês');
    } else {
      range = DataService.getMonthRange(DataService.getMomentMonth() + 1, year);
      this.toast.showSuccessToast('Exibindo os movimentos bancários do mês seguinte');
    }

    this.isLoading = true;

    this.movimentoService.getAllByPeriodo(range.minDate, range.maxDate).subscribe((dados: Movimento[]) => {
      this.movimentos = dados;
      this.movimentosFiltrados = this.movimentos;
      this.isLoading = false;
      this.isFiltroRapidoAtivo = true;
    });
  }

  limpaFiltroRapido(): void {
    this.isFiltroRapidoAtivo = false;
    this.loadData(false);
  }

}
