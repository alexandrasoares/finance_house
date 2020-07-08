import { HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class ServiceBase {
  /**
   * Header padrão para impedir cache no browser
   */
  public headersSemCache = new HttpHeaders()
    .set('Cache-Control', 'no-cache')
    .set('Pragma', 'no-cache')
    .set('Expires', new Date(new Date().getTime() + 600).toUTCString());

  converterModelParaParametros(objeto: any): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(objeto).forEach(key => {
      const tipoArray = Array.isArray(objeto[key]);
      if (tipoArray) {
        httpParams = this.converterArrayParaParametros(key, objeto, httpParams);
      } else {
        if (objeto[key] != null) {
          httpParams = httpParams.append(key, this.tratarStringParametro(objeto[key]));
        }
      }
    });

    return httpParams;
  }

  converterArrayParaParametros(key: any, objeto: any, httpParams: HttpParams): HttpParams {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < objeto[key].length; index++) {
      if (objeto[key][index] != null) {
        httpParams = httpParams.append(key, this.tratarStringParametro(objeto[key][index]));
      }
    }

    return httpParams;
  }

  tratarStringParametro(valor: any): string {
    return JSON.stringify(valor).replace(/"/g, '');
  }

  retornarCookie(keyCookie: any): string {
    const name = keyCookie + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return decodeURI(c.substring(name.length, c.length));
      }
    }
    return '';
  }

  inserirCookie(keyCookie: any, valor: any, expiraEm: string = null): void {
    if (expiraEm) {
      const expires = 'expires=' + expiraEm;
      document.cookie = keyCookie + '=' + encodeURI(valor) + ';' + expires + ';path=/';
    } else {
      document.cookie = keyCookie + '=' + encodeURI(valor) + ';';
    }
  }

  extrairValorQueryString(query: string) {
    query = query.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + query + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  verificarVersaoIEMenorQueOnze(): boolean {
    if (navigator && navigator.userAgent) {
      const navegador = navigator.userAgent.toLowerCase();
      if (navegador.indexOf('msie') !== -1 && navegador.split('msie')[1]) {
        const versao = parseInt(navegador.split('msie')[1], null);
        return versao < 11;
      }
    }
    return false;
  }
}
