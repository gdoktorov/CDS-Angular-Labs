import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { TodoInterface } from "./todo";
import { ApiService } from "./api.service";

@Injectable({
  'providedIn':'root'
})

export class TodoServesService {
  // todos: TodoInterface[] = [];
  // todosURL = "http://my-json-server.typicode.com/gdoktorov/json-fake-server/todos";
  // todosURL = "http://localhost:4300/todos";

  constructor( private http:HttpClient, private api:ApiService ) { }

  // handleHTTPErrors(error):Observable<any> {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Client-side error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   // window.alert(errorMessage);
  //   console.log(`errorMessage: ${errorMessage}`);  
  //   alert(errorMessage);
  //   console.log(error);
  //   return throwError(error)
  // }

  // fetchTodos():Observable<TodoInterface[]> {
  //   return this.http.get<TodoInterface[]>(this.todosURL).pipe(
  //     catchError(this.handleHTTPErrors)
  //   );
  // }

  // initTodos(todoList: TodoInterface[]) {
  //   this.todos = todoList;
  // }

  getTodos(){
    return this.api.fetchTodos();
  }

  removeTodo(todoID) {
    return this.api.deleteTodo(todoID);
  }

  addTodo(newTodo) {
    return this.api.createTodo(newTodo);
  }

  toggleComplete(todoIndex: number){
    // this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
  }
}
