import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'todo/:id',
    component: TodoDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }