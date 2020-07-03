import { Usuario } from './../models/usuario.model';
import { UsuarioDTO } from './../usuario.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conta } from '../models/conta.model';
import { APP_CONFIG } from './../../app.config';
import { Movimento } from './../models/movimento.model';
import { ContaDTO } from '../conta.dto';

@Injectable()
export class CadastroService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Conta[]> {
        return this.http.get<Conta[]>(`${APP_CONFIG.apiUrl}/contas`);
    }

    getMovimentos(contaId: number): Observable<Movimento[]> {
        return this.http.get<Movimento[]>(`${APP_CONFIG.apiUrl}/contas/${contaId}/movimentos`);
    }

    getById(contaId: number): Observable<Conta> {
        return this.http.get<Conta>(`${APP_CONFIG.apiUrl}/contas/${contaId}`);
    }

    insert(conta: UsuarioDTO): Observable<Usuario> {
        const requestBody = JSON.stringify(conta);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Usuario>(`${APP_CONFIG.apiUrl}/cadastro`, requestBody, { headers });
    }

    update(conta: Conta): Observable<any> {
        const requestBody = JSON.stringify(conta);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/contas`, requestBody, { headers });
    }

    delete(contaId: number): Observable<any> {
        return this.http.put(`${APP_CONFIG.apiUrl}/contas/remover/${contaId}`, null);
    }
}
