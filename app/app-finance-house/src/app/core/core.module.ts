import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { MensagemToastService } from './services/mensagem-toast.service';
import { ContaService } from './services/conta.service';
import { LoadingService } from './services/loading.service';
import { DataService } from './services/data.service';
import { TipoContaService } from './services/tipo-conta.service';
import { CadastroService } from './services/cadastro.service';
import { MovimentoService } from './services/movimento.service';
import { ProjetoService } from './services/projeto.service';
import { SubcategoriaService } from './services/subcategoria.service';
import { CategoriaService } from './services/categoria.service';
import { CartaoService } from './services/cartao.service';
import { GeracaoTokenAuthService } from './services/geracao-token-auth.service';
import { RequisicaoHttpService } from './services/requisicao-http.service';
import { CobrancaService } from './services/cobranca.service';
import { BeneficiarioService } from './services/beneficiario.service';
import { ServiceBase } from './services/service-base';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    MensagemToastService,
    ContaService,
    LoadingService,
    DataService,
    TipoContaService,
    CadastroService,
    MovimentoService,
    ProjetoService,
    SubcategoriaService,
    CategoriaService,
    CartaoService,
    GeracaoTokenAuthService,
    RequisicaoHttpService,
    ServiceBase,
    CobrancaService,
    BeneficiarioService
  ]
})
export class CoreModule { }
