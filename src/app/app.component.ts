import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service';

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    meuEstado = 11;
    minhaUF : UF;
    dados_da_samu : Dados[];
    media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }
    getMedia():number{
      let sum = 0;
        this.dados_da_samu.forEach(dado => {
            sum+=dado.valor;
        });
        return sum/this.dados_da_samu.length;
    }
    ngOnInit(): void {
        this.ufService.getUF(this.meuEstado).then( uf => this.minhaUF=uf);
        this.samuService.getMunicipiosAtendidosDeUmEstado( this.meuEstado ).then(dados => this.dados_da_samu = dados);
        this.media = this.getMedia();
    }
}
