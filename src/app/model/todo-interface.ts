import { TodoPriority } from "./todo-class";

export interface TodoInterface { 
//  garatisce che todo abbia: 
    id?: string;
    name: string; 
    tags: string[]; 
    priority: TodoPriority; 
    creationDate: number 

} 
//  interfaccia è via di mezzo tra oggetto generico e classe, non mi permette di definire funzioni con codice dentro; 
//  si usa al posto delle classi molto spesso; 

export function fromPriorityToColor(priority: TodoPriority): string{ 
    switch (priority) {
        case TodoPriority.DONE:
            return 'grey'; 
        case TodoPriority.LOW:
            return 'green'; 
        case TodoPriority.MEDIUM:
            return 'yellow'; 
        case TodoPriority.HIGH:
            return 'orange'; 
        default: 
            return 'red';
    } 
}

export function fromPrioritytoDescr(priority: TodoPriority): string{ 
    switch (priority) {
        case TodoPriority.DONE:
            return 'completato'; 
        case TodoPriority.LOW:
            return 'bassa'; 
        case TodoPriority.MEDIUM:
            return 'media'; 
        case TodoPriority.HIGH:
            return 'alta'; 
        default: 
            return 'molto alta';
    }
}