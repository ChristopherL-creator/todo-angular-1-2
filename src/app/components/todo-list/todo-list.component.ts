import { Component, Input, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: TodoClass[];

  constructor() { 
    this.todos = [];
  }

  ngOnInit(): void { 
  } 

  orderByName(){ 
    // this.todos.sort(function(a: TodoClass, b: TodoClass) { 
    //   // if (a.name < b.name) {
    //   //   return -1;
    //   // } 

    //   // if (a.name > b.name) {
    //   //   return 1;
    //   // } 
    //   //   return 0; 
    //   a.name.localeCompare(b.name); 
    // }) 
    this.todos.sort(TodoClass.compareByName); 
    // posso usare localeCompare perché devo ordinare stringhe
  } 

  orderByDate(){ 
    // this.todos.sort(function(a: TodoClass, b: TodoClass) { 
    //   if (a.creationDate < b.creationDate) {
    //     return -1;
    //   } 

    //   if (a.creationDate > b.creationDate) {
    //     return 1;
    //   } 
    //     return 0;
    // }) 
    this.todos.sort(TodoClass.compareByDate); 
    //  converto le date in numeri interi;
  }

  orderByPriority(){ 
  //   this.todos.sort(function(a: TodoClass, b: TodoClass) { 
  //     if (a.priority < b.priority) {
  //       return -1;
  //     } 

  //     if (a.priority > b.priority) {
  //       return 1;
  //     } 
  //       return 0;
  //   })
  // } 
  this.todos.sort(TodoClass.compareByPriority); 
  //  gli passo la static da todo-class
  }
}
