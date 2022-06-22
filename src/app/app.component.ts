import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { TodoClass, TodoPriority } from './model/todo-class';
import { fromPriorityToColor, fromPrioritytoDescr, TodoInterface } from './model/todo-interface';
import { TODOS, TODOS2, TODOS_I } from './model/todos-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // con implements, class può integrare interface OnInit
  title = 'todo-angular';
  // todosArray: TodoClass[];

  // id?: string;
  // name: string;
  // tags: string[];
  // priority: TodoPriority;
  // creationDate: number;

  constructor(){
    // this.todosArray = TODOS;
  }

  get creationDate(): Date {
    throw new Error('Method not implemented.');
  }

  get color(): string {
    throw new Error('Method not implemented.');
  }

  get description(): string {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(TODOS);
  }

  // toLuxuryMode(){
  //   this.todosArray = TODOS2;

  // }

  getCorrectDate(timestamp: number): Date{
    const milliseconds = timestamp * 1000;
    return new Date(milliseconds);
  }

  getDescritpion(priority: TodoPriority){
    return fromPrioritytoDescr(priority);
      //  ho spaostato codice da classe, a ovunque mi serva

  }

  getColor(priority: TodoPriority){
    return fromPriorityToColor(priority);
  //  ho spaostato codice da classe, a ovunque mi serva
  }
}
