import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos = [];

  constructor(private _todoServesService:TodoServesService){
    this.todos = this._todoServesService.getTodos();
  }

  removeTodo(index){
    this._todoServesService.removeTodo(index)
  }

}
