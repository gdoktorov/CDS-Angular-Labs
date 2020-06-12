import { Component, OnInit } from '@angular/core';
import {TodoInterface} from "../todo";
import {TodoServesService} from '../todo-serves.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: TodoInterface[] = [];
  

  constructor(private _todoServesService:TodoServesService) { }

  ngOnInit(): void {
    this._todoServesService.getTodos().subscribe( data => {
      this.todos = data;
    });
  }

  viewNewTodos(todo:TodoInterface){
    this.todos = [...this.todos,todo]
  }
  refreshTodos(todos){
    this.todos = todos
  }

}
