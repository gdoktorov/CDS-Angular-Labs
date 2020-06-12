import { Component, EventEmitter, Output } from '@angular/core';
import { TodoServesService } from "../../todo-serves.service";
import { TodoInterface } from 'src/app/todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})



export class AddTodoComponent {
  @Output() refreshTodos=new EventEmitter();
  constructor(private _todoServesService:TodoServesService){}

  addNewTodo(newTodoInput) {
    const newTodo:TodoInterface = {
      'title': newTodoInput.value,
      'completed': false
    };
    this._todoServesService.addTodo(newTodo).subscribe(
      data => {
        newTodo.id = data['id'];
      }
    );

    newTodoInput.value = "";

    this.refreshTodos.emit(newTodo);
  }
}
