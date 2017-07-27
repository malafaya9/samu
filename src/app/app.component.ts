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

    constructor()
    { }
    ngOnInit(): void {
    }
}
