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
    dataServ.getDoneTodos().subscribe({ 
      next: todos => this.todosArray = todos, 
      error: err => console.log(err)
      
    }); 
//  todos ora arrivano da dataserv;
  }

  ngOnInit(): void {

  } 

  refreshArray(){ 
    // this.todosArray = this.dataServ.getDoneTodos(); 
  }

  manageTodoDelete(todo: TodoClass){
    // mi arriva todo che era stato lanciato
    console.log('list-component', todo.name);
//  dobbiamo avvisrre behavior subj che è cambiato  
  this.dataServ.removeTodo(todo);
    
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
