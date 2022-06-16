import { Component, Input, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  @Input() todo?: TodoClass; 
  constructor() { }

  ngOnInit(): void {
  }

}
