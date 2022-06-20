import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  todosArray: TodoClass[] = [];

  constructor(private dataServ: DataService) {
    this.todosArray = dataServ.getDoneTodos(); 
//  todos ora arrivano da dataserv;
  }

  ngOnInit(): void {

  } 

  refreshArray(){ 
    this.todosArray = this.dataServ.getDoneTodos(); 
  }

  manageTodoEmission(todo: TodoClass){
    // mi arriva todo che era stato lanciato
    console.log('list-component', todo.name);
    this.orderByPriority();
  }

  orderByName(){

    this.todosArray.sort(TodoClass.compareByName);
 // richiamo funzione statica "compareBy..." da todo-class.ts
  }

  orderByDate(){

    this.todosArray.sort(TodoClass.compareByDate);
    //  converto le date in numeri interi;
  }

  orderByPriority(){

  this.todosArray.sort(TodoClass.compareByPriority);
  //  gli passo la static da todo-class
  }
// prendo codice da todo-list
}
