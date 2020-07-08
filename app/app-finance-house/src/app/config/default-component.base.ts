import { ConfigGlobalMask } from './config-global-mask';
import { ConfigGlobalPadroesRegex } from './config-global-padroes-regex';
import { ConfigGlobalMensagens } from './config-global-mensagens';
import { MensagemToastService } from '../core/services/mensagem-toast.service';
import { ServiceLocator } from '../core/service.locator';

import { environment } from './../../environments/environment.prod';

export class DefaultComponentBase {
    componenteAtivo: boolean;

    private mensagemToastService: MensagemToastService;
    public mascaras = ConfigGlobalMask.config;
    public padroesRegex = ConfigGlobalPadroesRegex.config;
    public mensagens = ConfigGlobalMensagens;

    constructor(

    ) {
        // this.mensagemToastService = ServiceLocator.injector.get(MensagemToastService);
    }

    public mostrarMsgErro(mensagem: string): void {
      this.mensagemToastService.showErrorToast(mensagem);
    }

    public mostrarMsgSucesso(mensagem: string): void {
      this.mensagemToastService.showSuccessToast(mensagem);
    }

    public mostrarMsgAviso(mensagem: string): void {
      this.mensagemToastService.showInfoToast(mensagem);
    }
}
