
// quando definisco variabile let, non sa che varibaile mettergli, quindi le assegna "any"
// tuttavia, "any" andrebbe usato il meno possibile, assegnandole tipo;
// una volta assegnato tipo, non posso cambiarlo al volo;

import { QueryFlags } from "@angular/compiler/src/render3/view/compiler";

let paperino: string | number | boolean | null;
// posso assegnare due tipi con pipe "|"

paperino = 'ciao';

paperino = 5;

paperino = true;

paperino = null;
// null e undefined sono tipi specifici;

let topolino: any;

topolino = 'eccolo';

topolino = true;

topolino = null;

//  Array

let minnie: number[] = [];

let paperogs: string[] = ['qui'/*, 7*/];

let paperone: number[][] = [[3, 4], [456, 1]]; 
// array di array di numbers; 

//  Oggetto 

let qua: any = {name: 'qua', age: 13}; 

qua.grade = 9; 

qua.city = 'palermo'
//  in typescript non puoi aggiungere propeità al volo, va dichiarata prima, o specifico il tipo di qui come 
//  any;

//  con any:
let qui = {name: 'qui', age: 13}; 

let qui2 = {name: qui.name, age: qui.age, grade: 19}; 

let qui3 = { ...qui2, city: 'palermo'}; 
// per aggiungere proprietà;