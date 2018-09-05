import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {

  // public id: number;
  public todoItem: Observable<any>;
  // private paramSubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    // this.paramSubscription = this.route.paramMap.subscribe(params => {
    //   this.id = parseInt(params.get('id'), 10);
    //   this.todoItem = this.httpClient.get<any>(`http://localhost:8080/api/todos/${this.id}`);
    // });
    this.todoItem = this.route.paramMap.pipe(
      switchMap(params => this.httpClient.get<any>(`http://localhost:8080/api/todos/${params.get('id')}`))
    );
  }

  ngOnDestroy() {
    // this.paramSubscription.unsubscribe();
  }
}
