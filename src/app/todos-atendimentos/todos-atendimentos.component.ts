import { Component, Input, OnInit } from '@angular/core';
import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';
import { UFService } from '../services/uf.service';

@Component({
  selector: 'todos-atendimentos',
  templateUrl: './todos-atendimentos.component.html',
  styleUrls: ['./todos-atendimentos.component.css']
})
export class TodosAtendimentosComponent implements OnInit {
  @Input() id : number;
  dados : Dados[];
  constructor(private ufService : UFService, private samuService : SamuService) { }

  ngOnInit() {
    this.samuService.getAllMunicipiosAtendidosPorEstado().then( data => this.dados = data);
  }
}
