import { Component, Input, OnInit } from '@angular/core';
import { Dados } from '../types/samu';
@Component({
  selector: 'estado-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {
  @Input() dados : Dados[];
  constructor() { }

  ngOnInit() {
  }

}
