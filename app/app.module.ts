import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoColumnComponent } from './todo-column/todo-column.component';
import { TodoComponent } from './todo/todo.component';
import { TodoBoardComponent } from './todo-board/todo-board.component';

import { NewTodoColumnDialogButtonComponent } from './new-todo-column-dialog-button/new-todo-column-dialog-button.component';
import { NewTodoColumnDialogWindowComponent } from './new-todo-column-dialog-window/new-todo-column-dialog-window.component';

import { NewTodoDialogButtonComponent } from './new-todo-dialog-button/new-todo-dialog-button.component';
import { NewTodoDialogWindowComponent } from './new-todo-dialog-window/new-todo-dialog-window.component';

import { EditTodoColumnDialogButtonComponent } from './edit-todo-column-dialog-button/edit-todo-column-dialog-button.component';
import { EditTodoColumnDialogWindowComponent } from './edit-todo-column-dialog-window/edit-todo-column-dialog-window.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoardComponent,
    TodoColumnComponent,
    TodoComponent,
    NewTodoColumnDialogButtonComponent,
    NewTodoColumnDialogWindowComponent,
    NewTodoDialogButtonComponent,
    NewTodoDialogWindowComponent,
    EditTodoColumnDialogButtonComponent,
    EditTodoColumnDialogWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
