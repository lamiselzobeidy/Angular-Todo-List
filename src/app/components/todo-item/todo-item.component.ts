import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes =  {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  onDelete(todo){
    console.log(todo)
    this.todoService.deleteTodo(todo)

  }
  onToggle(todo){
    console.log("toggled" + todo);
    this.todoService.toggleTodo(todo)
  }

}
