import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoColumnDialogButtonComponent } from './edit-todo-column-dialog-button.component';

describe('EditTodoColumnDialogButtonComponent', () => {
  let component: EditTodoColumnDialogButtonComponent;
  let fixture: ComponentFixture<EditTodoColumnDialogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTodoColumnDialogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoColumnDialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
