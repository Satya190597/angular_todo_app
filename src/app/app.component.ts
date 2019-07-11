import { Component, NgModule } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';
  todo:String = '';
  todoArray = [];

  addTodo()
  {
    if(this.todo!=='' && this.todo.replace(' ','').length>0)
    {
      this.todoArray.push(this.todo);
    }
    this.todo = ''
  }
  delete(index)
  {
    this.todoArray.splice(index,1)
  }
}
