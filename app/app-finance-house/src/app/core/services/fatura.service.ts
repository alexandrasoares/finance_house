import { FaturaDTO } from './../models/fatura.dto';
import { PagamentoFaturaDTO } from './../models/pagamento-fatura.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fatura } from '../models/fatura.model';
import { Movimento } from '../models/movimento.model';
import { APP_CONFIG } from './../../app.config';

@Injectable()
export class FaturaService {

    constructor(private http: HttpClient) {
    }

    getAllByPeriodo(minDate: string, maxDate: string): Observable<Fatura[]> {
        const params = new HttpParams()
            .append('minDate', minDate)
            .append('maxDate', maxDate);

        return this.http.get<Fatura[]>(`${APP_CONFIG.apiUrl}/faturas/periodo`, { params });
    }

    getById(faturaId: number): Observable<Fatura> {
        return this.http.get<Fatura>(`${APP_CONFIG.apiUrl}/faturas/${faturaId}`);
    }

    getMovimentos(faturaId: number): Observable<Movimento[]> {
        return this.http.get<Movimento[]>(`${APP_CONFIG.apiUrl}/faturas/${faturaId}/movimentos`);
    }

    insert(fatura: FaturaDTO): Observable<Fatura> {
        const requestBody = JSON.stringify(fatura);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Fatura>(`${APP_CONFIG.apiUrl}/faturas`, requestBody, { headers });
    }

    /**
     * Paga uma fatura
     * @param pagamentoFaturaDTO ;
     */
    pay(pagamentoFaturaDTO: PagamentoFaturaDTO): Observable<any> {
        const requestBody = JSON.stringify(pagamentoFaturaDTO);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/faturas/efetua-pagamento`, requestBody, { headers });
    }

    /**
     * Abre uma dada fatura
     * @param faturaId ;
     */
    open(faturaId: number): Observable<any> {
        return this.http.put(`${APP_CONFIG.apiUrl}/faturas/abre/${faturaId}`, null);
    }

    /**
     * Fecha uma dada fatura
     * @param faturaId ;
     */
    close(faturaId: number): Observable<any> {
        return this.http.put(`${APP_CONFIG.apiUrl}/faturas/fecha/${faturaId}`, null);
    }
}
