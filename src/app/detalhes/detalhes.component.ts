import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';
import { UFService } from '../services/uf.service';

@Component({
  selector: 'estado-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  Uf : UF;
  media : number;

  constructor(private ufService : UFService, private samuService : SamuService,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.ufService.getUF(+params.get('id')))
      .subscribe(result => this.Uf = result);
    this.route.paramMap
      .switchMap((params: ParamMap) => this.samuService.getMunicipiosAtendidosDeUmEstado(+params.get('id')))
      .subscribe(result => this.getMedia(result));

  }
  getMedia(data:Dados[]):void{
    let sum = 0;
      data.forEach(dado => {
          sum+=dado.valor;
          this.media = sum/data.length;
      });
  }

}
