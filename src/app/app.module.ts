import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    DetalhesComponent,
    AtendimentosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
