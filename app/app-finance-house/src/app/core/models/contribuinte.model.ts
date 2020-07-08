import { Usuario } from './usuario.model';

export class ContribuinteModel {
    constructor(
        public id: number,
        public idUsuario: Usuario,
    ) { }
}
