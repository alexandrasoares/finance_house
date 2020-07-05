import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cobranca } from '../models/cobranca.model';
import { APP_CONFIG } from './../../app.config';
import { CobrancaPagamentoDTO } from '../models/cobranca-pagamento.dto';
import { CobrancaRemocaoDTO } from '../models/cobranca-remocao.dto';
import { CobrancaDTO } from './../models/cobranca.dto';

@Injectable()
export class CobrancaService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Cobranca[]> {
        return this.http.get<Cobranca[]>(`${APP_CONFIG.apiUrl}/cobranca`);
    }

    getAllByPeriodo(minDate: string, maxDate: string): Observable<Cobranca[]> {
        const httpParams = new HttpParams()
            .append('minDate', minDate)
            .append('maxDate', maxDate);

        return this.http.get<Cobranca[]>(`${APP_CONFIG.apiUrl}/cobrancas/periodo`, { params: httpParams });
    }

    getById(cobrancaId: number): Observable<Cobranca> {
        return this.http.get<Cobranca>(`${APP_CONFIG.apiUrl}/cobrancas/${cobrancaId}`);
    }

    insert(cobranca: CobrancaDTO): Observable<Cobranca> {
        const requestBody = JSON.stringify(cobranca);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Cobranca>(`${APP_CONFIG.apiUrl}/cobrancas`, requestBody, { headers });
    }

    pay(cobranca: CobrancaPagamentoDTO): Observable<any> {
        const requestBody = JSON.stringify(cobranca);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/cobrancas/efetua-pagamento`, requestBody, { headers });
    }

    update(cobranca: Cobranca): Observable<any> {
        const requestBody = JSON.stringify(cobranca);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/cobrancas`, requestBody, { headers });
    }

    delete(cobranca: CobrancaRemocaoDTO): Observable<any> {
        const requestBody = JSON.stringify(cobranca);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.request('deconste', `${APP_CONFIG.apiUrl}/cobrancas`, { body: requestBody, headers });
    }
}
