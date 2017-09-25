import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-botao-principal',
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.css']
})
export class BotaoPrincipalComponent implements OnInit {

  descricao: string = 'Avançar';

  constructor() { }

  ngOnInit() {
  }

  onAvancar() {
    this.descricao = 'Próximo';
  }

}
