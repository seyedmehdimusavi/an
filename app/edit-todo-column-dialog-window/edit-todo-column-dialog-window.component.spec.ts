import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoColumnDialogWindowComponent } from './edit-todo-column-dialog-window.component';

describe('EditTodoColumnDialogWindowComponent', () => {
  let component: EditTodoColumnDialogWindowComponent;
  let fixture: ComponentFixture<EditTodoColumnDialogWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoColumnDialogWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoColumnDialogWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
