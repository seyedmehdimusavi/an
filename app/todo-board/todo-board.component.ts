import { Component, OnInit } from '@angular/core';
import { TodoColumn } from '../todo-column';
import { TodoColumnService } from '../todo-column.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.css']
})

export class TodoBoardComponent implements OnInit {
  todoColumnList: TodoColumn[] = [];

  constructor(private todoColumnService: TodoColumnService) {  
  }


  ngOnInit() {
    this.getTodoColumnList();
  }

  getTodoColumnList(): void {
    this.todoColumnList = this.todoColumnService.getTodoColumnList();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoColumnList, event.previousIndex, event.currentIndex);
  }
}
