import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoDialogWindowComponent } from './new-todo-dialog-window.component';

describe('NewTodoDialogWindowComponent', () => {
  let component: NewTodoDialogWindowComponent;
  let fixture: ComponentFixture<NewTodoDialogWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoDialogWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoDialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
