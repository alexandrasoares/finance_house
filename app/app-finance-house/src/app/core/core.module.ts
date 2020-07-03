import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { MensagemToastService } from './services/mensagem-toast.service';
import { ContaService } from './services/conta.service';
import { LoadingService } from './services/loading.service';
import { DataService } from './services/data.service';
import { TipoContaService } from './services/tipo-conta.service';
import { CadastroService } from './services/cadastro.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    MensagemToastService,
    ContaService,
    LoadingService,
    DataService,
    TipoContaService,
    CadastroService
  ]
})
export class CoreModule { }
