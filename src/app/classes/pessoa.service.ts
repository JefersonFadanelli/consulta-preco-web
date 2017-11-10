import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PessoaService {

  pessoaURL = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) {   }

  listar() {
    return this.http.get<any>( this.pessoaURL );
  }

}
