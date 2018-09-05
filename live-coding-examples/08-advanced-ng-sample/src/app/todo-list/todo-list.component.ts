import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoItems: Observable<any[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.todoItems = this.httpClient.get<any[]>('http://localhost:8080/api/todos')
      .pipe(retry(3), catchError((err, _) => { console.error(err); return _; }));
  }

}
