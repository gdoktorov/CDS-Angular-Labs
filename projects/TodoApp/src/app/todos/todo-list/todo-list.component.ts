import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input('todosData') todos;

  @Output() listRefresh = new EventEmitter();

  constructor(){
  }

  ngOnInit() {}

  refreshList(index){
    this.todos.splice(index,1);
    this.listRefresh.emit(this.todos);
  }
}
