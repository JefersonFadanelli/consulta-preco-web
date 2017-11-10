import { Injectable } from '@angular/core';

@Injectable()
export class CadastroPessoa {
  nome: string;
  cpf: string;
  email: string;
  cep: string;
  endereco: string;
  estado: string;
  cidade: string;
  bairro: string;
  numero: string;
  telefone: string;

  dataNascimento: Date;
  dataCadastro: Date;

  metodoSet = {
    setNome : function( nome: string ){ this.nome = nome; },
    setCpf : function( cpf: string ){ this.cpf = cpf; console.log('' + this.nome)},
    setEmail : function( email: string ){ this.email = email; },
    setCep( cep: string ){ this.cep = cep; },
    setEstado( estado: string ){ this.estado = estado; },
    setCidade( cidade: string ){ this.cidade = cidade; },
    setBairro( bairro: string ){ this.bairro = bairro; },
    setEndereco( endereco: string ){ this.endereco = endereco; },
    setNumero( numero: string ){ this.numero = numero; },
    setTelefone( telefone: string ){ this.telefone = telefone; },
    setDataNascimento( dataNascimento: Date ) { this.dataNascimento = dataNascimento; },
    setDataCadastro( dataCadastro: Date ) { this.dataCadastro = dataCadastro; }
  }

  getNome() { return this.nome; }
  getCpf( ) { return this.cpf; }
  getEmail( ) { return this.email; }
  getCep( ) { return this.cep; }
  getEstado( ) { return this.estado; }
  getCidade( ) { return this.cidade; }
  getBairro( ) { return this.bairro; }
  getEndereco( ) { return this.endereco; }
  getNumero( ) { return this.numero; }
  getTelefone( ) { return this.telefone; }
  getDataNascimento( ) { return this.dataNascimento; }
  getDataCadastro( ) { return this.dataCadastro; }

}
