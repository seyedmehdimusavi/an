import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoColumnDialogWindowComponent } from './new-todo-column-dialog-window.component';

describe('DialogWindowComponent', () => {
  let component: NewTodoColumnDialogWindowComponent;
  let fixture: ComponentFixture<NewTodoColumnDialogWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoColumnDialogWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoColumnDialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
