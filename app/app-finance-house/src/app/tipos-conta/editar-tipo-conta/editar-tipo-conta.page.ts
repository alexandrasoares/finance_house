import { MensagemToastService } from './../../core/services/mensagem-toast.service';
import { TipoContaService } from './../../core/services/tipo-conta.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoConta } from './../../core/models/tipo-conta.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-tipo-conta',
  templateUrl: './editar-tipo-conta.page.html',
  styleUrls: ['./editar-tipo-conta.page.scss'],
})
export class EditarTipoContaPage implements OnInit {

  tipoContaForm: FormGroup;
  @Input() tipoConta: TipoConta;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private tipoContaService: TipoContaService,
    private toast: MensagemToastService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.loadForm(this.tipoConta);
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

  atualizar(): void {
    this.tipoConta.nome = this.nome.value;

    this.tipoContaService.update(this.tipoConta).subscribe(() => {
      this.toast.showSuccessToast('Tipo de conta atualizado com sucesso');
      this.closeModal();
    });
  }

  private initForm(): void {
    this.tipoContaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  private loadForm(tipoConta: TipoConta): void {
    this.nome.setValue(tipoConta.nome);
  }

  get nome() { return this.tipoContaForm.get('nome'); }

}
