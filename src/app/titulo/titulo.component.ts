import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'estado-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  @Input() titulo: Text;
  constructor() { }

  ngOnInit() {
  }

}
