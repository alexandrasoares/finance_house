import { TipoConta } from './models/tipo-conta.model';

export interface ContaDTO {
    nome: string;
    banco: string;
    agencia: string;
    conta: string;
    saldoInicial: number;
    compoemSaldo: boolean;
    tipo: TipoConta;
}