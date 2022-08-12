import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoColumnService } from '../todo-column.service';
import { TodoColumn } from '../todo-column';


@Component({
  selector: 'app-edit-todo-column-dialog-window',
  templateUrl: './edit-todo-column-dialog-window.component.html',
  styleUrls: ['./edit-todo-column-dialog-window.component.css']
})
export class EditTodoColumnDialogWindowComponent implements OnInit {
  todoColumnList!: TodoColumn[];
  select: any;
  selected:any;

  constructor(private todoColumnService: TodoColumnService, @Inject(MAT_DIALOG_DATA) public todoColumn: any) {
  };

  ngOnInit() {
    this.getTodoColumnList();
    console.log(this.select);
  }


  getTodoColumnList(): void {
    let sitems = this.todoColumnService.getTodoColumnList();
    this.select = sitems.filter((i: any) => {
      if (i.id === this.todoColumn.id) return i
    });
    console.log(this.select.items);
  }

  

  editTodoColumn(editedTitle: string) {
    this.todoColumn.title = editedTitle;
  }

  deleteTodoColumn(index:any) {
    this.todoColumnService.deleteTodoColumn(this.todoColumn.id,index.value);
    this.getTodoColumnList();
  }
}
