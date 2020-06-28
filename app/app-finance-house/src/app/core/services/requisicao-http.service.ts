import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoHttpService extends ServiceBase {
  private _iniciouReqHttp: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly iniciouReqHttp$: Observable<any> = this._iniciouReqHttp.asObservable().pipe(publish(), refCount(), );

  constructor() {
    super();
  }

  notificarReqHttp(mensagem: boolean): void {
    this._iniciouReqHttp.next(mensagem);
  }

}