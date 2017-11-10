import { Component } from '@angular/core';

import { ProdutoService } from './classes/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProdutoService]
})

export class AppComponent {

  produtos = [];

  input: string = "";

  constructor( private produtoService: ProdutoService ){ }

  ngOnInit( ) {

  }

  pesquisa(){
    this.produtoService.listar( this.input ).subscribe( produtos => { this.produtos = produtos } );
  }

}
