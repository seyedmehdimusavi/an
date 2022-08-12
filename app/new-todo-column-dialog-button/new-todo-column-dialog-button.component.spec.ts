import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoColumnDialogButtonComponent } from './new-todo-column-dialog-button.component';

describe('NewTodoColumnDialogComponent', () => {
  let component: NewTodoColumnDialogButtonComponent;
  let fixture: ComponentFixture<NewTodoColumnDialogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoColumnDialogButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoColumnDialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
