import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[];

  constructor() { 
  }

  getTodos() {
    return this.todos;
  }
  addnewTodo(todo){
    console.log(todo);
    this.todos.push(todo);
  }
  deleteTodo(todo){
    for (var i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i].title == todo.title) {
        this.todos.splice(i, 1);
      }
    }
  }
  toggleTodo(todo){
    for (var i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i].title == todo.title) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
  }

}
