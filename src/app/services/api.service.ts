import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ObservedValueOf } from 'rxjs';
import { TodoClass } from '../model/todo-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  private readonly BASE_URL = 'https://628b2f687886bbbb37b2139d.mockapi.io/todos';

  constructor(private http: HttpClient) { 
    //  importo httpclient; 
  }  
//  chimata server, possiamo fare pipe, che ci permete di infilre elaborazioni del dato generico in arrivo da mock api, 
//  da dbobjects, a todoclass
  getTodosFromDb(){ 
    return this.http.get<TodoClass[]>(this.BASE_URL).pipe( 
      // stabilisco che il tipo sia comunque TodoClass
      map(dbObjects => this.convertToTodosClass(dbObjects))
      ); 
    //  map di observable 
  } 

  deleteTodo(id: string): Observable<any>{ 
    
    const url = this.BASE_URL + '/' + id; 

    return this.http.delete<any>(url);

  } 
  
  putTodo(todo: TodoClass): Observable<TodoClass>{  
    const url = this.BASE_URL + '/' + todo.id; 
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    } 
    return this.http.put<TodoClass>(url, TodoClass.toDbObj(todo), httpOptions)
  } 

  postTodo(todo: TodoClass): Observable<TodoClass>{ 

    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    }; 

    return this.http.post<TodoClass>(this.BASE_URL, TodoClass.toDbObj(todo), httpOptions).pipe( 
      map(todoObj => TodoClass.fromDbObj(todoObj))
    )
  }

  convertToTodosClass(dbObjectArray: any[]){ 
    const todoArray = []; 
    for (const dbObject of dbObjectArray) {
      const newTodo = TodoClass.fromDbObj(dbObject); 
      //  array di oggetti generici diventa array di todoclass
      todoArray.push(newTodo);
    } 
    return todoArray;
  }

  fetchData(){
    // return fetch('https://628b2f687886bbbb37b2139d.mockapi.io/todos') 
  }
}
