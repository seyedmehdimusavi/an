import { Component, Inject, Input, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewTodoDialogWindowComponent } from '../new-todo-dialog-window/new-todo-dialog-window.component';
import { TodoColumn } from '../todo-column';
@Component({
  selector: 'app-new-todo-dialog-button',
  templateUrl: './new-todo-dialog-button.component.html',
  styleUrls: ['./new-todo-dialog-button.component.css']
})
export class NewTodoDialogButtonComponent implements OnInit {
  @Input()
  todoColumn!: TodoColumn;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogNewTodo() {
    this.dialog.open(NewTodoDialogWindowComponent, {
      data: this.todoColumn
    });
  }

}