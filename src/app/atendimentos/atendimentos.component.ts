import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'estado-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentosComponent implements OnInit {
  dados : Dados[];
  constructor(private samuService : SamuService,private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.samuService.getMunicipiosAtendidosDeUmEstado(+params.get('id')))
        .subscribe(data => this.dados = data);
  }
}
