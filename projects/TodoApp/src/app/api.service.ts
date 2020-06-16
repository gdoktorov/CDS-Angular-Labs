import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { TodoInterface } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  todos: TodoInterface[] = [];
  todosURL = "http://localhost:4300/todos";

  constructor(private http:HttpClient) { }

  handleHTTPErrors(error):Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(`errorMessage: ${errorMessage}`);  
    alert(errorMessage);
    console.log(error);
    return throwError(error)
  }

  fetchTodos():Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.todosURL).pipe(
      catchError(this.handleHTTPErrors)
    );
  }

  createTodo(newTodo) {
    return this.http.post<TodoInterface[]>(this.todosURL, newTodo).pipe(
      catchError(this.handleHTTPErrors)
      );
  }

  deleteTodo(todoID) {
    return this.http.delete<TodoInterface[]>(this.todosURL+"/"+todoID).pipe(
      catchError(this.handleHTTPErrors)
      );
  }

  updateTodo(todoID,newTodo) {
    return this.http.put<TodoInterface[]>(this.todosURL+"/todos/"+todoID,newTodo).pipe(
      catchError(this.handleHTTPErrors)
      );
  }
  
}
