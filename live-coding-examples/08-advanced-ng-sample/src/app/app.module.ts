import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AddTodoReactiveComponent} from './add-todo-reactive/add-todo-reactive.component';
import {AddTodoComponent, RevenueValidatorDirective} from './add-todo/add-todo.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoDetailsComponent} from './todo-details/todo-details.component';
import {TodoListComponent} from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent, TodoListComponent, AddTodoComponent, TodoDetailsComponent,
    RevenueValidatorDirective, AddTodoReactiveComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule,
    MatButtonModule, MatIconModule, HttpClientModule, MatFormFieldModule,
    MatInputModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
