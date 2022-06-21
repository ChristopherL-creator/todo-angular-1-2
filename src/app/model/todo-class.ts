export class TodoClass {

    id?: string
    name: string;
    //  public: tutto qulli che usano oggetto di tipo todo, posono acceder a variabile; default
     tags: string[];
    //  private simula underscore in javascript, propeità non si può vedere al di fuori di classe
    private readonly _creationDate: number;
    //  come const, ma di proprietà, la posso cambiare solo una volta in costruttore;
    //  possono coesistere readonly/private/public per ogni proprietà
    priority: TodoPriority; // con ? intendo che proprietà c'è e non c'èv
    private _doneDate?: number;

    constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: TodoPriority = TodoPriority.LOW){
        this.name = name;
        // proprità name non esiste in todo class: in typescript propretà vanno dichiarte fuori da costuttore
        this.tags = tags;
        this._creationDate = creationDate.getTime();
        this.priority = priority;
    }

    get creationDate(): Date{
        return new Date(this._creationDate);
    }

    get doneDate(): Date | null {
        if (this._doneDate) {
            return new Date(this._doneDate);
        } else {
            return null;
        }
    }

    get color(): string{
        return getPriorityColor(this.priority);
    }

    get description(): string{
        return getPriorityString(this.priority);
    }

    done(): void{
        const now = new Date();
        this.priority = TodoPriority.DONE;
        this._doneDate = now.getTime();
    }

    static compareByName(a: TodoClass, b: TodoClass){
        return a.name.localeCompare(b.name);
    }
    //  uso localeCompare perché sono stringhe;
    //  siccome è statica, la posso passare in tutti i files in cui serve (todo-list-component.ts)

    static compareByDate(a: TodoClass, b: TodoClass){
        return a._creationDate - b._creationDate;
    }

    static compareByPriority(a: TodoClass, b: TodoClass){
        return b.priority - a.priority;
    } 

    static fromDbObj(dbObject: any){ 
        const todo = new TodoClass(dbObject.name, dbObject.tags, new Date(dbObject.creationDate * 1000), dbObject.priority); 
        todo.id = dbObject.id;
        //  creationDate è di tipo Date, quindi dobbiamo cotruirla con new Date();
        if (dbObject.doneDate) {
            todo._doneDate = dbObject.doneDate * 1000;
        } 
        return todo;
    }
}

// export enum TodoPriority{
    // DONE = { order: -1, name: 'completato', color: 'grey'},
    // LOW = { order: 0, name: 'bassa', color: 'green'},
    // MEDIUM = { order: 1, name: 'media', color: 'yellow'},
    // HIGH = { order: 2, name: 'alta', color: 'orange'},
    // VERYHIGH = { order: 3, name: 'molto alta', color: 'red'}
//  enums non possono tollerae oggetti complessi
// }
export enum TodoPriority{
    DONE = -1,
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    VERYHIGH = 3
//  enums non possono tollerae oggetti complessi
}

//  dobbiamo quindi creare switch per ottenere i vari parametri

export function getPriorityColor(priority: TodoPriority): string{
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

export function getPriorityString(priority: TodoPriority): string{
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
