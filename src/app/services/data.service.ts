import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService { 

  // todos: TodoClass[] = []; 

  todos: BehaviorSubject<TodoClass[]> = new BehaviorSubject<TodoClass[]>([]); 
  //  creo behaviorsybj che contenga todoclass, lo inizializzo con new, e gli assegno array vuoto come valore di default 

  constructor(private apiServ: ApiService) {  
    // apiServ.fetchData() 
    // .then(resp => resp.json())
    // .then(result => this.todos = this.convertToTodosClass(result)) 
    // .catch(err => console.log(err)) 
    // commento fetch 
    this.apiServ.getTodosFromDb().subscribe({ 
      //  ora bhaviour subject, tramite next, avrà valore da db, che sara result: 
      next: result => this.todos.next(result), 
      //  se va bene; result conterrà tutti i todos
      error: err => console.log(err)
      //  se va male
    });
    // this.todos = TODOS; 
  } 
  
  // convertToTodosClass(dbObjectArray: any[]){ 
  //   const todoArray = []; 
  //   for (const dbObject of dbObjectArray) {
  //     const newTodo = TodoClass.fromDbObj(dbObject); 
  //     todoArray.push(newTodo);
  //   } 
  //   return todoArray;
  // }

  getActiveTodos(): Observable<TodoClass[]>{ 
//  uso di uovo pipe per elaborare(filter) dato prima di resituirlo
    return this.todos.pipe( 
      map(array => array.filter(todo => todo.doneDate === null)) 
      // tengo solo todos con doneDate === null(non hanno doneDate)
    );
    // const tempTodos = []; 
    // for (const todo of this.todos) {
    //   if (todo.doneDate === null) {
    //     tempTodos.push(todo);
    //   }
    // } 
    // return tempTodos;
  } 

  getDoneTodos(): Observable<TodoClass[]>{ 
    // return this.todos.filter(todo => todo.doneDate === null); 
    //  ogni volta che richiamo todos, subisce filtraggio:
    return this.todos.pipe( 
      map(array => array.filter(todo => todo.doneDate !== null)) 
      //  resituisco tutti uelli che hanno doneDate
    );
  } 

  completeTodo(todo: TodoClass): Observable<TodoClass>{ // forzo refresh di behavioursubj 
    //  creo nuovo array, da quello vecchio, e flielo do in pasto come nuovo vlore, per avvisre subject che è cambiato
    const newArray = [...this.todos.value]; 
    // in subject significa prendere ultimo valore dato 
    this.todos.next(newArray); 
    // next forza cambiamento subject
    return this.apiServ.putTodo(todo)
  }  

  removeTodo(todo: TodoClass): Observable<TodoClass>{  
    //  uso value per prendere array todos con valori più recenti; creo nuovo array in cui filtro via tutti todos diversi 
    //  da quello selezionato, in modo che mi rimnanga solo quello 
    const newArray = this.todos.value.filter(t => t !== todo);
    this.todos.next(newArray); 
        // next forza cambiamento subject 
    return this.apiServ.deleteTodo(todo.id!); 
  } 

  getTodoById(id: string): Observable<TodoClass | undefined>{ 
    //  risutlato potrebbe essere todoclass o undefinde
    return this.todos.pipe( 
      map(array => array.find(t => t.id === id)) 
      //  resituisco tutti uelli che hanno doneDate
    );
  }
}
