import { Injectable } from '@angular/core';

@Injectable()
export class CadastroPessoa {
  campo :string;
  nome: string;
  email: string;
  endereco: string;

  setNome( nome: string ){ this.nome = nome; }
  getNome( ) { return this.nome; }

  setEmail( email: string ){ this.email = email; }
  getEmail( ) { return this.email; }

  setEndereco( endereco: string ){ this.endereco = endereco; }
  getEndereco( ) { return this.endereco; }

  setCampoAtual( campo: string ) { this.campo = campo; }
  getCampoAtual( ) { return this.campo; }
}
