import { Usuario } from './../models/usuario.model';
import { UsuarioDTO } from './../usuario.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Conta } from '../models/conta.model';
import { APP_CONFIG } from './../../app.config';
import { Movimento } from './../models/movimento.model';
import { ContaDTO } from '../conta.dto';

@Injectable()
export class CadastroService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${APP_CONFIG.apiUrl}/movimentos`);
    }

    getById(email: string): Observable<Usuario> {
        return this.http.get<Usuario>(`${APP_CONFIG.apiUrl}/cadastro/`);
    }

    obterPorId(id: string): Observable<Usuario> {
        const parametro = new HttpParams().append('id', id);
        return this.http.get<Usuario>(`${APP_CONFIG.apiUrl}/${id}`, {
          params: parametro
        });
    }

    insert(cadastro: UsuarioDTO): Observable<Usuario> {
        const requestBody = JSON.stringify(cadastro);
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
