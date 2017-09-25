import { Component } from '@angular/core';

import { CadastroPessoa } from './classes/cadastro-pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CadastroPessoa]
})
export class AppComponent {
  finalizou: boolean;
  indice: number = 0;
  campos: string[] = ['Nome', 'CPF', 'Email', 'Endereço', 'Senha'];
  campoExibicao: string;
  input: string = "";

  constructor(private cadastroPessoa: CadastroPessoa ){ }

  ngOnInit( ) {
    this.campoExibicao = this.campos[0];
    this.cadastroPessoa.setCampoAtual( this.campoExibicao );
  }

  onProximo() {
    this.indice++;

    if( this.indice == this.campos.length ){
        this.onFinalizar();
    }

    this.campoExibicao = this.campos[this.indice];
    this.cadastroPessoa.setCampoAtual( this.campoExibicao );
    this.input = "";
  }

  onFinalizar() {
    console.log( this.cadastroPessoa );
    this.finalizou = true;
  }

  setInputValue(input: string) {
    if( this.cadastroPessoa.getCampoAtual() == "Nome"){
      this.cadastroPessoa.setNome( input );
    }

    if( this.cadastroPessoa.getCampoAtual() == "Endereço"){
      this.cadastroPessoa.setEndereco( input );
    }

    if( this.cadastroPessoa.getCampoAtual() == "Email"){
      this.cadastroPessoa.setEmail( input );
    }

    this.onProximo();
  }


}
