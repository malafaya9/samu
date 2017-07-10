import { Component, Input, OnInit } from '@angular/core';
import { UF } from '../types/uf';

@Component({
  selector: 'estado-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  @Input() Uf : UF;
  @Input() media : number;
  constructor() { }

  ngOnInit() {
  }

}
