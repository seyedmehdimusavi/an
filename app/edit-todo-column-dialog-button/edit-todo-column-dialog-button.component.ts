import { Component, Input, OnInit } from '@angular/core';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTodoColumnDialogWindowComponent } from '../edit-todo-column-dialog-window/edit-todo-column-dialog-window.component';
import { TodoColumn } from '../todo-column';
@Component({
  selector: 'app-edit-todo-column-dialog-button',
  templateUrl: './edit-todo-column-dialog-button.component.html',
  styleUrls: ['./edit-todo-column-dialog-button.component.css']
})
export class EditTodoColumnDialogButtonComponent implements OnInit {
  @Input()
  todoColumn!: TodoColumn;
  constructor(public dialog: MatDialog) { }

  ngOnInit(){
  }
  openDialogEditTodoColumn() {
    this.dialog.open(EditTodoColumnDialogWindowComponent, {
      data: this.todoColumn
    });
  }

}