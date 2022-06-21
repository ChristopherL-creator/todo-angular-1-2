import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TodoClass } from '../model/todo-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
    //  importo httpclient; 
  }  
//  chimata server, possiamo fare pipe, che ci permete di infilre elaborazioni del dato generico in arrivo da mock api, 
//  da dbobjects, a todoclass
  getTodosFromDb(){ 
    const url = 'https://628b2f687886bbbb37b2139d.mockapi.io/todos'; 
    return this.http.get<TodoClass[]>(url).pipe( 
      // stabilisco che il tipo sia comunque TodoClass
      map(dbObjects => this.convertToTodosClass(dbObjects))
      ); 
    //  map di observable 
  } 

  convertToTodosClass(dbObjectArray: any[]){ 
    const todoArray = []; 
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject); 
      todoArray.push(newTodo);
    } 
    return todoArray;
  }

  fetchData(){
    return fetch('https://628b2f687886bbbb37b2139d.mockapi.io/todos') 
  }
}
