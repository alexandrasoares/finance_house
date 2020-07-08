import { Cobranca } from './../../core/models/cobranca.model';
import { DataService } from './../../core/services/data.service';
import { CobrancaDTO } from './../../core/models/cobranca.dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BeneficiarioService } from './../../core/services/beneficiario.service';
import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { CobrancaService } from './../../core/services/cobranca.service';
import { Beneficiario } from './../../core/models/beneficiario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cobranca',
  templateUrl: './inserir-cobranca.page.html',
  styleUrls: ['./inserir-cobranca.page.scss'],
})
export class InserirCobrancaPage implements OnInit {

  cobrancaForm: FormGroup;
  // beneficiarios: Beneficiario[] = [];

  constructor(
    private fb: FormBuilder,
    private cobrancaService: CobrancaService,
    private beneficiarioService: BeneficiarioService,
    private toast: MensagemToastService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.loadData();
  }

  doRefresh(event: any): void {
    // this.loadData(event);
  }

  inserir(): void {
    const cobranca: CobrancaDTO = {
      descricao: this.descricao.value,
      parcela: this.parcela.value,
      dataVencimento: DataService.toApiPattern(this.dataVencimento.value),
      valor: this.valor.value,
      juros: this.juros.value,
      desconto: this.desconto.value,
      // beneficiario: this.beneficiarios.find((b: Beneficiario) => b.id === this.beneficiario.value),
      observacao: this.obs.value
    };

    this.cobrancaService.insert(cobranca).subscribe((dados: Cobranca) => {
      this.router.navigate(['/cobrancas']);
      this.toast.showSuccessToast(`Cobrança ${dados.descricao} inserida com sucesso`);
      this.cobrancaForm.reset();
    });
  }

  // private loadData(event: any = null): void {
  //   this.beneficiarioService.getAll().subscribe((dados: Beneficiario[]) => {
  //     this.beneficiarios = dados;

  //     if (dados.length === 0){
  //       this.toast.showErrorToast('Nenhum beneficiário cadastrado');
  //       this.beneficiario.disable();
  //     }

  //     if (event !== null){
  //       event.target.complete();
  //     }
  //   });
  // }

  getMaxDate(): string {
    return DataService.getDatePickerMaxDate();
  }

  private initForm(): void {
    this.cobrancaForm = this.fb.group({
      descricao: ['', Validators.required],
      parcela: [''],
      dataVencimento: ['', Validators.required],
      valor: ['', Validators.required],
      juros: [''],
      desconto: [''],
      // beneficiario: ['', Validators.required],
      obs: ['']
    });
  }

  get descricao() { return this.cobrancaForm.get('descricao'); }
  get parcela() { return this.cobrancaForm.get('parcela'); }
  get dataVencimento() { return this.cobrancaForm.get('dataVencimento'); }
  get valor() { return this.cobrancaForm.get('valor'); }
  get juros() { return this.cobrancaForm.get('juros'); }
  get desconto() { return this.cobrancaForm.get('desconto'); }
  // get beneficiario() { return this.cobrancaForm.get('beneficiario'); }
  get obs() { return this.cobrancaForm.get('obs'); }

}
