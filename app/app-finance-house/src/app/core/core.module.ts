import { ServiceBase } from './services/service-base';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CadastroService,
    MovimentoService,
    ProjetoService,
    SubcategoriaService,
    CategoriaService,
    CartaoService,
    GeracaoTokenAuthService,
    RequisicaoHttpService,
    ServiceBase
  ]
})
export class CoreModule { }
