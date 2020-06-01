import { Injectable } from '@angular/core';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  todos = [
    {
      'id':1,
      'name': 'todo1',
      'complete': false
    },
    {
      'id':2,
      'name': 'todo2',
      'complete': true
    },
    {
      'id':4,
      'name': 'todo3',
      'complete': false
    },
  ]

  constructor() { }

  getTodos(){
    return this.todos;
  }

  removeTodo(index){
    this.todos.splice(index,1);
  }

  addTodo(todoTitle){
    let lastID = this.todos.length;

    this.todos.push({
      'id': lastID+1,
      'name': todoTitle,
      'complete': false
    });
  }

  toggleComplete(todoIndex: number){
    this.todos[todoIndex].complete = !this.todos[todoIndex].complete;
  }
}
