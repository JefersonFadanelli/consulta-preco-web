import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CadastroPessoa } from '../classes/cadastro-pessoa';

@Component({
  selector: 'app-input-principal',
  templateUrl: './input-principal.component.html',
  styleUrls: ['./input-principal.component.css']
})

export class InputPrincipalComponent implements OnInit {

  input: string = '';

  constructor( private cadastroPessoa: CadastroPessoa ) { }

  ngOnInit() {  }

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
  }

}
