import { TodoClass, TodoPriority } from "./todo-class";

export const TODOS: TodoClass[] = [];
//  rendo disponibilie array al resto del progetto

const todo1 = new TodoClass('mandare curriculum ad andrea');  
const todo2 = new TodoClass('corrompere andrea per l\'esame finale'); 
const todo3 = new TodoClass('maledire angular');  
const todo4 = new TodoClass('riguardare classi js', [], new Date(), TodoPriority.HIGH); 

TODOS.push(todo1); 
TODOS.push(todo2); 
TODOS.push(todo3); 
TODOS.push(todo4);