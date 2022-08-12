import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoColumnComponent } from './todo-column.component';

describe('TodoListComponent', () => {
  let component: TodoColumnComponent;
  let fixture: ComponentFixture<TodoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoColumnComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
