export class TodoClass {  

    public name: string; 
    //  public: tutto qulli che usano oggetto di tipo todo, posono acceder a variabile; default
    private tags: string[]; 
    //  private simula underscore in javascript, propeità non si può vedere al di fuori di classe
    private readonly _creationDate: number;  
    //  come const, ma di proprietà, la posso cambiare solo una volta in costruttore; 
    //  possono coesistere readonly/private/public per ogni proprietà
    prority?: string; // con ? intendo che proprietà c'è e non c'è

    constructor(name: string, tags: string[] = [], creationDate: Date = new Date(), priority: string = 'low'){ 
        this.name = name; 
        // proprità name non esiste in todo class: in typescript propretà vanno dichiarte fuori da costuttore 
        this.tags = tags; 
        this._creationDate = creationDate.getTime(); 
        this.prority = priority;
    }

    get creationDate(): Date{ 
        return new Date(this._creationDate);
    } 

}
