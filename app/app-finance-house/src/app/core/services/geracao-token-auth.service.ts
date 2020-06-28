import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { ServiceBase } from './service-base';

@Injectable()
export class GeracaoTokenAuthService extends ServiceBase {
  constructor() {
    super();
  }

  public idTokenNoCookie = 'tokenAdminWebFISAutomTeste';
  public idUsuarioNoCookie = 'usuarioLogadoTk';

  salvarTokenNoCache(token: string) {
    this.inserirCookie(this.idTokenNoCookie, token);
    this.inserirCookie('expira_em', this.retornarDataExpiracaoToken());
  }

  salvarUsuarioNoCache(usuario: string) {
    this.inserirCookie(this.idUsuarioNoCookie, usuario);
  }

  verificarTrocaUrlPadrao() {
    return (
      (location.search || '').length > 0 &&
      (location.search || '').indexOf('/#/') === -1
    );
  }

  limparToken() {
    this.inserirCookie(this.idTokenNoCookie, '');
    this.inserirCookie(this.idUsuarioNoCookie, '');
    // limpar todos os cookies
    const cookies = document.cookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cookies.length; i++) {
      this.inserirCookie(cookies[i].split('=')[0], '');
    }
  }

  retornarTokenDoCache() {
    return this.retornarCookie(this.idTokenNoCookie);
  }

  retornarAuthorizationHeader(): string {
    if (this.verificarSeUsuarioLogado()) {
      return 'Bearer ' + this.retornarTokenDoCache();
    }
    return '-';
  }

  verificarSeUsuarioLogado(): boolean {
    const token = this.retornarTokenDoCache();
    return (token !== null && token !== undefined && token.trim().length > 0) && this.verificarSeTokenValido();
  }

  retornarTokenDecodificado<T>(): T {
    const objetoToken = jwt_decode(this.retornarTokenDoCache());
    const claims = <T>objetoToken;
    return claims;
  }

  verificarDeveRenovarToken(): boolean {
    const token = this.retornarTokenDoCache();
    if (!token || token.trim().length === 0) {
      return false;
    }

    let agora: any;
    let dataExpiraToken: any;
    agora = new Date();
    dataExpiraToken = this.retornarDataExpiracaoToken();

    const hourDiff = dataExpiraToken - agora; // milissegundos
    const diffHrs = Math.floor((hourDiff % 86400000) / 3600000); // passa para horas
    const diffMins = Math.floor(((hourDiff % 86400000) % 3600000) / 60000); // passa para minutos
    const minutosRestantes = diffMins + (diffHrs * 60); // arredonda

    // faltando 5min para expirar, pede novo token
    return (minutosRestantes <= 5);
  }

  verificarSeTokenValido(): boolean {
    return this.retornarDataExpiracaoToken() > new Date();
  }

  retornarDataExpiracaoToken(): Date | null {
    const token = this.retornarTokenDoCache();
    if (!token) {
      return null;
    }

    let decodificado: any;
    decodificado = jwt_decode(token);

    if (!decodificado.hasOwnProperty('exp')) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decodificado.exp);

    return date;
  }

}