import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing-module.module';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { SamuService } from './services/samu.service';
import { UFService } from './services/uf.service';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { TodosAtendimentosComponent } from './todos-atendimentos/todos-atendimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    DetalhesComponent,
    AtendimentosComponent,
    TodosAtendimentosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [SamuService,UFService],
  bootstrap: [AppComponent]
})
export class AppModule { }
