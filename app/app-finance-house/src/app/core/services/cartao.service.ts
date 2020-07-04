import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cartao } from '../models/cartao.model';
import { CartaoDTO } from '../models/cartao.dto';
import { Fatura } from '../models/fatura.model';
import { APP_CONFIG } from './../../app.config';

@Injectable()
export class CartaoService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Cartao[]> {
        return this.http.get<Cartao[]>(`${APP_CONFIG.apiUrl}/cartoes-credito`);
    }

    getFaturas(cartaoId: number): Observable<Fatura[]> {
        return this.http.get<Fatura[]>(`${APP_CONFIG.apiUrl}/cartoes-credito/${cartaoId}/faturas`);
    }

    getById(cartaoId: number): Observable<Cartao> {
        return this.http.get<Cartao>(`${APP_CONFIG.apiUrl}/cartoes-credito/${cartaoId}`);
    }

    insert(cartao: CartaoDTO): Observable<Cartao> {
        const requestBody = JSON.stringify(cartao);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Cartao>(`${APP_CONFIG.apiUrl}/cartoes-credito`, requestBody, { headers });
    }

    update(cartao: Cartao): Observable<any> {
        const requestBody = JSON.stringify(cartao);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put<any>(`${APP_CONFIG.apiUrl}/cartoes-credito`, requestBody, { headers });
    }

    delete(cartaoId: number): Observable<any> {
        return this.http.put<any>(`${APP_CONFIG.apiUrl}/cartoes-credito/remover/${cartaoId}`, null);
    }
}
