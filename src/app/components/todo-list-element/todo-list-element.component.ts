import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';


@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {


  @Input() todo?: TodoClass;
  @Output() onTodoCompleted = new EventEmitter<TodoClass>();
  @Output() onTodoDeleted = new EventEmitter<TodoClass>();


  // emetto oggetto di tipo todo

  constructor() { }

  ngOnInit(): void {
  }

  todoCompleted(){
    // dico al todo che è stao completato
    this.todo?.done();
    this.onTodoCompleted.emit(this.todo);
  }

  todoDeleted(): void{
    this.onTodoDeleted.emit(this.todo);
  }

}
