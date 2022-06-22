import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneListComponent } from './components/done-list/done-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [ 
  //  ad ogni pagina(path) assegno component
  {path: 'active', component: TodoListComponent}, 
  {path: 'done', component: DoneListComponent}, 
  {path: 'todo/:id', component: TodoDetailComponent}, 
  // per passare parametro a detail 
  {path: 'todo', component: TodoDetailComponent}, 
  {path: '', redirectTo: '/active', pathMatch: 'full'}, 
  // patchmatch va di default con redirectTo 
  {path: '**', component: PageNotFoundComponent /*redirectTo: '/active'*/},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  //  usehahs forza angular a porre hahs ad ogni pagina
  exports: [RouterModule]
})
export class AppRoutingModule { }
