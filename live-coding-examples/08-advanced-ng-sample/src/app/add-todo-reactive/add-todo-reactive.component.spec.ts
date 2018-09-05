import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoReactiveComponent } from './add-todo-reactive.component';

describe('AddTodoReactiveComponent', () => {
  let component: AddTodoReactiveComponent;
  let fixture: ComponentFixture<AddTodoReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
