import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from '../detalhes/detalhes.component';
import { AtendimentosComponent } from '../atendimentos/atendimentos.component';
import { TodosAtendimentosComponent } from '../todos-atendimentos/todos-atendimentos.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/minha_uf', pathMatch: 'full' },
  { path: 'minha_uf/:id',  component: DetalhesComponent },
  { path: 'dados/:id', component: AtendimentosComponent },
  { path: 'dados', component: TodosAtendimentosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
