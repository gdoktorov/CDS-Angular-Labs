import { Component } from '@angular/core';
import { TodoServesService } from "../../todo-serves.service";


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent {
  constructor(private _todoServesService:TodoServesService){
  }
  addTodo(param){ 
    console.log(typeof(param))
    this._todoServesService.addTodo(param);
  }
}
