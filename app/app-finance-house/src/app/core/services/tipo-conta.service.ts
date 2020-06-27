import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONFIG } from './../../app.config';
import { TipoConta } from '../models/tipo-conta.model';
import { TipoContaDTO } from '../models/tipo-conta.dto';

@Injectable()
export class TipoContaService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<TipoConta[]> {
        return this.http.get<TipoConta[]>(`${APP_CONFIG.apiUrl}/tipos-conta`);
    }

    getById(tipoContaId: number): Observable<TipoConta> {
        return this.http.get<TipoConta>(`${APP_CONFIG.apiUrl}/tipos-conta/${tipoContaId}`);
    }

    insert(tipoConta: TipoContaDTO): Observable<TipoConta> {
        const requestBody = JSON.stringify(tipoConta);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<TipoConta>(`${APP_CONFIG.apiUrl}/tipos-conta/`, requestBody, { headers });
    }

    update(tipoConta: TipoConta): Observable<any> {
        const requestBody = JSON.stringify(tipoConta);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/tipos-conta/`, requestBody, { headers });
    }

    delete(tipoContaId: number): Observable<any> {
        return this.http.put(`${APP_CONFIG.apiUrl}/tipos-conta/remover/${tipoContaId}`, null);
    }
}
