
export class RespostaPadraoAPIModel<T> {
    sucesso: boolean;
    dados: T[];
    notificacoes: NotificacaoRetornoAPIModel[];
}

export class NotificacaoRetornoAPIModel {
    chave: string;
    valor: string;
}
