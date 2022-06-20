import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { } 

  fetchData(){
    return fetch('https://628b2f12667aea3a3e290de6.mockapi.io/todos') 
  }
}
