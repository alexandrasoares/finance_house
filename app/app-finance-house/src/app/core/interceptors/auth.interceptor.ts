import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { RequisicaoHttpService } from '../services/requisicao-http.service';
import { GeracaoTokenAuthService } from '../services/geracao-token-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  urlsInjetarToken: string[];

  constructor(private injector: Injector) {
    this.urlsInjetarToken = [environment.apiUrl];
  }

  intercept(requisicaoOriginal: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(GeracaoTokenAuthService);
    const reqHttpService = this.injector.get(RequisicaoHttpService);
    const authHeader = auth.retornarAuthorizationHeader();
    let authReq = requisicaoOriginal;

    const urlPrecisaDeToken = this.verificarSeUrlPrecisaTokenAuth(requisicaoOriginal);

    if (urlPrecisaDeToken) {
      authReq = requisicaoOriginal.clone({ headers: requisicaoOriginal.headers.set('Authorization', authHeader) });
      reqHttpService.notificarReqHttp(true);
    }
    reqHttpService.notificarReqHttp(true);
    return next.handle(authReq).pipe(
      map(evt => {
        return evt;
      }),
      catchError(error => {
        return throwError(error);
      }),
      finalize(() => {
        reqHttpService.notificarReqHttp(false);
      })
    );
  }

  verificarSeUrlParaGerarToken(requisicaoOriginal: HttpRequest<any>): boolean {
    const strToken = '/login';
    return requisicaoOriginal.url.indexOf(strToken, requisicaoOriginal.url.length - strToken.length) !== -1;
  }

  verificarSeUrlPrecisaTokenAuth(requisicaoOriginal: HttpRequest<any>): boolean {
    const isUrlDeGerarToken = this.verificarSeUrlParaGerarToken(requisicaoOriginal);
    if (!isUrlDeGerarToken) {
      return (
        this.urlsInjetarToken.findIndex(f => {
          return requisicaoOriginal.url.indexOf(f) > -1;
        }) > -1
      );
    }
    return false;
  }
}
