import { Movimento } from './movimento.model';
import { Usuario } from './usuario.model';

export class ContribuinteModel {
    constructor(
        public id: number,
        public idUsuario: Usuario,
        public movimento?: Movimento,
        public valorDividido?: string,
    ) { }

    public static usuario(crt: ContribuinteModel): boolean {
        return crt.idUsuario !== null;
    }

    public static movimento(crt: ContribuinteModel): boolean {
        return crt.movimento !== null;
    }

    public static valorDividido(crt: ContribuinteModel): boolean {
        return crt.valorDividido !== null;
    }

}
