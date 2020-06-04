import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'
import {TodoInterface} from "../../todo-serves.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: TodoInterface[];

  constructor(private _todoServesService:TodoServesService){
    this.todos = this._todoServesService.getTodos();
  }

}
