import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { TodoInterface } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo;
  @Input() todoIndex;
  index: number;

  @Output() refreshList=new EventEmitter();
  constructor(private _todoServes: TodoServesService){}

  removeTodo(id){
    this._todoServes.removeTodo(id).subscribe(); 
    this.refreshList.emit(this.todoIndex);
  }

  toggleComplete(todoIndex){
    this._todoServes.toggleComplete(todoIndex)
  }
}
