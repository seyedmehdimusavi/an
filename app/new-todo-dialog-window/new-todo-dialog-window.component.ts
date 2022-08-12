import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { TodoColumnService } from '../todo-column.service';
//import { TodoColumn } from '../todo-column';
//import { Input } from '@angular/core';


@Component({
  selector: 'app-new-todo-dialog-window',
  templateUrl: './new-todo-dialog-window.component.html',
  styleUrls: ['./new-todo-dialog-window.component.css']
})
export class NewTodoDialogWindowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public todoColumn: any) { };

  ngOnInit() {
  }

  createNewTodo(newTodoTitle: string, newTodoText: string) {

    this.todoColumn.items.push(
      {
        id: this.todoColumn.items.length,
        title: newTodoTitle,
        text: newTodoText
      }
    )
    
  }
}