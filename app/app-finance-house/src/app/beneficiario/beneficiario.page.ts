import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { BeneficiarioService } from './../core/services/beneficiario.service';
import { Beneficiario } from './../core/models/beneficiario.model';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.page.html',
  styleUrls: ['./beneficiario.page.scss'],
})
export class BeneficiarioPage implements OnInit {

  beneficiarios: Beneficiario[] = [];

  constructor(
    private beneficiarioService: BeneficiarioService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData(event: any = null): void {
    this.beneficiarioService.getAll().subscribe((dados: Beneficiario[]) => {
      this.beneficiarios = dados;

      if (event !== null) {
        event.target.complete();
      }
    });
  }

  doRefresh(event: any): void {
    this.loadData(event);
  }

  editar(beneficiario: Beneficiario): void {
    this.navController.navigateForward(`/beneficiarios/editar/${beneficiario.id}`);
  }

  detalhes(beneficiario: Beneficiario): void {
    this.navController.navigateForward(`/beneficiarios/detalhes/${beneficiario.id}`);
  }

  remover(beneficiario: Beneficiario): void {
    this.beneficiarioService.delete(beneficiario.id)
    .subscribe(() => this.beneficiarios.splice(this.beneficiarios.indexOf(beneficiario), 1));
  }

  openCobrancasModal(beneficiario: Beneficiario): void {

  }

}
