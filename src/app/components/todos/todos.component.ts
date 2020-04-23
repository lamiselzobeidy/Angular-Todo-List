import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  newtodo:Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.newtodo = {
      id: undefined,
      title: undefined,
      completed: undefined
    };
    
  }

  addTodo() {
    if($('input[name=YourTodo]').val())
    {
      console.log("hi");
      this.newtodo.id = 1;
      this.newtodo.title = $('input[name=YourTodo]').val() + "";
      console.log(this.newtodo.title)
      this.newtodo.completed = false;
      console.log(this.newtodo)
      this.todoService.addnewTodo(this.newtodo);
      console.log("hena")
      this.newtodo = {
        id: undefined,
        title: undefined,
        completed: undefined
      };
      $('input[name=YourTodo]').val("")
    }

  }

}
