import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoDialogButtonComponent } from './new-todo-dialog-button.component';

describe('NewTodoDialogButtonComponent', () => {
  let component: NewTodoDialogButtonComponent;
  let fixture: ComponentFixture<NewTodoDialogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoDialogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoDialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
