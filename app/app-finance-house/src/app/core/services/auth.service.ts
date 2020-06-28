import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';
import { APP_CONFIG } from './../../app.config';
import { RecuperarSenhaModel } from '../models/recuperar-senha.model';
import { DataService } from './data.service';
import { AutenticacaoModel } from './../models/autenticacao.model';

@Injectable()
export class AuthService {

    private logado = false;
    private token = '';
    private tokenExpiration = 600000;
    private refreshTokenEndpoint = 'auth/refresh-token';
    private loggedAt = 0;

    constructor(private http: HttpClient, private navController: NavController) { }

    login(credenciais: AutenticacaoModel): Observable<HttpResponse<Usuario>> {
        const requestBody = JSON.stringify(credenciais);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post<Usuario>(`${APP_CONFIG.apiUrl}/login`, requestBody, { headers, observe: 'response' });
    }

    successfulLogin(response: HttpResponse<Usuario>): void {
        this.logado = true;
        // this.token = response.headers.get('Authorization').substr(7);
        this.loggedAt = DataService.getNow();

        localStorage.setItem('usuarioLogado', JSON.stringify(response.body));
    }

    /**
     * Solicita um novo token a API
     */
    refreshToken(): void {
        this.http.post(`
        ${APP_CONFIG.apiUrl}/${this.refreshTokenEndpoint}`, null, { observe: 'response' }).subscribe((response: HttpResponse<any>) => {
            this.token = response.headers.get('Authorization').substr(7);
            this.loggedAt = DataService.getNow();
        });
    }

    salvaCredenciais(credenciais: AutenticacaoModel): void {
        localStorage.setItem('credenciais', JSON.stringify(credenciais));
    }

    getCredenciais(): AutenticacaoModel {
        return JSON.parse(localStorage.getItem('credenciais'));
    }

    isLogado(): boolean {
        return this.logado;
    }

    getToken(): string {
        return this.token;
    }

    getUsuarioLogado(): Usuario {
        return JSON.parse(localStorage.getItem('usuarioLogado'));
    }

    logout(removeCredenciais: boolean = true): void {
        this.logado = false;
        this.token = '';

        if (removeCredenciais) {
            localStorage.removeItem('usuarioLogado');
            localStorage.removeItem('credenciais');
        }

        this.navController.navigateRoot('/login');
    }

    recuperaSenha(recuperarSenhaDTO: RecuperarSenhaModel): Observable<any> {
        const requestBody = JSON.stringify(recuperarSenhaDTO);
        const headers = new HttpHeaders().append('Content-Type', 'application/json');

        return this.http.post(`${APP_CONFIG.apiUrl}/auth/esqueci-minha-senha`, requestBody, { headers });
    }

    /**
     * Retorna a quantidade de segundos restantes da sessão atual (baseia-se na data de login + o tempo de expiração do token)
     */
    getSessionRemainingSeconds(): number {
        const now: number = DataService.getNow();
        const expireAt: number = this.loggedAt + this.tokenExpiration;

        return Math.round((expireAt - now) / 1000);
    }

    getrefreshTokenEndpoint(): string {
        return this.refreshTokenEndpoint;
    }
}
