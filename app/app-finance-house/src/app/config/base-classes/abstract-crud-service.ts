import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ServiceBase } from './../../core/services/service-base';
import { RespostaPadraoAPIModel } from './../../core/models/resposta-padrao-api.model';

export interface ICrudService<Tipo> {
  listarTodos(): Observable<RespostaPadraoAPIModel<Tipo>>;
  inserir(model: Tipo): Observable<RespostaPadraoAPIModel<Tipo>>;
  alterar(id: any, model: Tipo): Observable<RespostaPadraoAPIModel<Tipo>>;
  obterPorId(id: any): Observable<RespostaPadraoAPIModel<Tipo>>;
  remover(id: any): Observable<RespostaPadraoAPIModel<any>>;
}

/**
 * Classe base para serviços básicos com CRUD
 */
export abstract class AbstractCrudService<Tipo> extends ServiceBase implements ICrudService<Tipo> {
  /**
   * Construção padrão, tem que passar o nome do controller usado
   */
  constructor(
      protected http: HttpClient,
      protected nomeController: string
    ) {
    super();
    }

  listarTodos(): Observable<RespostaPadraoAPIModel<Tipo>> {
    return this.http.get<RespostaPadraoAPIModel<Tipo>>(this.getBaseUrl(`/api/${this.nomeController}`), { headers: this.headersSemCache });
  }

  inserir(model: Tipo): Observable<RespostaPadraoAPIModel<Tipo>> {
    return this.http.post<RespostaPadraoAPIModel<Tipo>>(this.getBaseUrl(`/api/${this.nomeController}`), model);
  }

  alterar(id: any, model: Tipo): Observable<RespostaPadraoAPIModel<Tipo>> {
    return this.http.put<RespostaPadraoAPIModel<Tipo>>(this.getBaseUrl(`/api/${this.nomeController}/${id}`), model);
  }

  obterPorId(id: any): Observable<RespostaPadraoAPIModel<Tipo>> {
    return this.http.get<RespostaPadraoAPIModel<Tipo>>(this.getBaseUrl(`/api/${this.nomeController}/${id}`), {
      headers: this.headersSemCache
    });
  }

  remover(id: any): Observable<RespostaPadraoAPIModel<any>> {
    return this.http.delete<RespostaPadraoAPIModel<any>>(this.getBaseUrl(`/api/${this.nomeController}/${id}`));
  }
}
