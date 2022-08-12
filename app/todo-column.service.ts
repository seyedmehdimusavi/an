import { Injectable } from '@angular/core';
import { TodoColumn } from './todo-column';

@Injectable({ providedIn: 'root' })
export class TodoColumnService {
  myTodoColumnList = [
    {
      id: 0,
      title: 'Requested',
      items: [{
        id: 0,
        title: 'Task 2',
        text: 'Feb 2016'
      }, {
        id: 1,
        title: 'Task 3',
        text: 'urgent'
      },
      {
        id: 1,
        title: 'Task 7',
        text: 'Jan 2017'
      }]
    },
    {
      id: 1,
      title: 'In Progress',
      items: [{
        id: 0,
        title: 'Task 4',
        text: 'sample text'
      }]
    },
    {
      id: 2,
      title: 'Done',
      items: [{
        id: 0,
        title: 'Task 6',
        text: 'urgent'
      }]
    }
  ];
  constructor() {

  }

  getTodoColumnList(): TodoColumn[] {
    return this.myTodoColumnList;
  }
  deleteTodoColumn(todoColumn:any,index:any) {
    this.myTodoColumnList[todoColumn].items.splice(index,1);
  }
  addTodoColumn(ColumnTitle: string) {
    this.myTodoColumnList.push({
      id: this.myTodoColumnList.length,
      title: ColumnTitle,
      items: []
    })
  }
}