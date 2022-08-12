import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TodoColumn } from '../todo-column';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-column',
  templateUrl: './todo-column.component.html',
  styleUrls: ['./todo-column.component.css']
})
export class TodoColumnComponent implements OnInit {
  @Input() todoColumn!: TodoColumn;
  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
