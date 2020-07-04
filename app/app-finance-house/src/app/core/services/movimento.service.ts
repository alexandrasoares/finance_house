
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MovimentoDTO } from './../models/movimento.dto';
import { APP_CONFIG } from './../../app.config';
import { Movimento } from '../models/movimento.model';

@Injectable()
export class MovimentoService {

    constructor(private http: HttpClient) {}

    getAll(page: number = 0): Observable<Movimento[]> {
        return this.http.get<Movimento[]>(`${APP_CONFIG.apiUrl}/movimentos?page=${page}`);
    }

    getAllByPeriodo(minDate: string, maxDate: string): Observable<Movimento[]> {
        const httpParams = new HttpParams()
            .append('minDate', minDate)
            .append('maxDate', maxDate);

        return this.http.get<Movimento[]>(`${APP_CONFIG.apiUrl}/movimentos/periodo`, { params: httpParams });
    }

    getById(movimentoId: number): Observable<Movimento> {
        return this.http.get<Movimento>(`${APP_CONFIG.apiUrl}/movimentos/${movimentoId}`);
    }

    insert(movimento: MovimentoDTO): Observable<Movimento> {
        const requestBody = JSON.stringify(movimento);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Movimento>(`${APP_CONFIG.apiUrl}/movimentos`, requestBody, { headers });
    }

    update(movimento: Movimento): Observable<any> {
        const requestBody = JSON.stringify(movimento);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.put(`${APP_CONFIG.apiUrl}/movimentos`, requestBody, { headers });
    }

    delete(movimentoId: number): Observable<any> {
        return this.http.delete(`${APP_CONFIG.apiUrl}/movimentos/${movimentoId}`);
    }
}
