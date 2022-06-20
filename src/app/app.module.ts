import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListElementComponent } from './components/todo-list-element/todo-list-element.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListElementComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule 
// non è default javasctip, la devo importare manualmente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
