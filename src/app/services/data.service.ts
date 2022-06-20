import { Injectable } from '@angular/core';
import { TodoClass } from '../model/todo-class';
import { TODOS } from '../model/todos-mock';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService { 

  todos: TodoClass[] = [];

  constructor(private apiServ: ApiService) {  
    // apiServ.fetchData() 
    // .then(resp => resp.json())
    // .then(result => this.todos = this.convertToTodosClass(result)) 
    // .catch(err => console.log(err)) 
    // commento fetch 
    this.apiServ.getTodosFromDb().subscribe({ 
      next: result => this.todos = result, 
      //  se va bene
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

  getActiveTodos(){ 
    const tempTodos = []; 
    for (const todo of this.todos) {
      if (todo.priority !== -1) {
        tempTodos.push(todo);
      }
    } 
    return tempTodos;
  } 

  getDoneTodos(){ 
    return this.todos.filter(todo => todo.priority === -1);
  }
}
