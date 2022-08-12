import { Component, OnInit} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewTodoColumnDialogWindowComponent } from '../new-todo-column-dialog-window/new-todo-column-dialog-window.component';
@Component({
  selector: 'app-new-todo-column-dialog-button',
  templateUrl: './new-todo-column-dialog-button.component.html',
  styleUrls: ['./new-todo-column-dialog-button.component.css']
})
export class NewTodoColumnDialogButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialogNewTodoColumn() {
    this.dialog.open(NewTodoColumnDialogWindowComponent);
  }

}

