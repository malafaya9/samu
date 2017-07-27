import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAtendimentosComponent } from './todos-atendimentos.component';

describe('TodosAtendimentosComponent', () => {
  let component: TodosAtendimentosComponent;
  let fixture: ComponentFixture<TodosAtendimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosAtendimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
