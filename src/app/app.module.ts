import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListElementComponent } from './components/todo-list-element/todo-list-element.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListElementComponent,
    DoneListComponent,
    PageNotFoundComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
// non è default javasctip, la devo importare manualmente
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
