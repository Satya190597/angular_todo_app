import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray = [];

  addTodo(value)
  {
    this.todoArray.push(value);
    console.log(value)
  }
}
