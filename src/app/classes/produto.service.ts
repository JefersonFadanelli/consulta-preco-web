import { Injectable } from '@angular/core';

import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  codigoBarrasURL = 'http://localhost:8080/preco/id/';
  descricaoURL = 'http://localhost:8080/preco/descricao/';
  
  constructor(private http: HttpClient) {   }

  listar(pesquisa: string) {
    if( pesquisa.length == 0){
      return;
    }
    
    if( this.isNumber( pesquisa ) ) {
      return this.http.get<any>( this.codigoBarrasURL + pesquisa );
    }

    return this.http.get<any>( this.descricaoURL + pesquisa);
  }

  isNumber( n ) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

}
