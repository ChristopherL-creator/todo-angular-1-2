import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/model/todo-class';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit, OnDestroy {

  // @Input() todos: TodoClass[];

  todosArray: TodoClass[] = [];

  // @Input() set todos(value: TodoClass[]){
  //   this.todosArray = value;
  //   this.orderByPriority();
  // }
  // creando set, ogni volta che arriva nuovo input, cambia da solo anche html

  constructor(private dataServ: DataService, private apiServ: ApiService) {
    dataServ.getActiveTodos().subscribe({ 
      // todos che mi arrivano sono filtrati da getactive.. 
      next: todos => this.todosArray = todos, 
      error: err => console.log(err)
    }); 

    //  todos ora arrivano da dataserv;
  } 

  refreshArray(){ 
    // this.todosArray = this.dataServ.getActiveTodos(); 
  }

  ngOnInit(): void {
    // console.log('OnInit', new Date().getTime());
  }

  ngAfterViewInit(): void {
    // console.log('AfterViewInit', new Date().getTime());
  }

  ngOnDestroy(): void {

  }

  manageTodoCompleted(todo: TodoClass): void{
    // mi arriva todo che era stato lanciato
    console.log('list-component', todo.name); 
    this.dataServ.completeTodo(todo).subscribe({ 
      next: res => console.log('bella', res), 
      error: err => console.log(err)
    });
  }

  orderByName(){
    // this.todos.sort(function(a: TodoClass, b: TodoClass) {
      // if (a.name < b.name) {
      //   return -1;
      // }

    //   // if (a.name > b.name) {
    //   //   return 1;
    //   // }
    //   //   return 0;
    //   a.name.localeCompare(b.name);
    // })
    this.todosArray.sort(TodoClass.compareByName);
 // richiamo funzione statica "compareBy..." da todo-class.ts
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
    this.todosArray.sort(TodoClass.compareByDate);
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
  this.todosArray.sort(TodoClass.compareByPriority);
  //  gli passo la static da todo-class
  }
}
