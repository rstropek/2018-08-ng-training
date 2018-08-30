import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

interface ITodoItem {
  id: number;
  description: string;
  assignedTo: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  public description: string;
  public assignedTo: string;
  public todoList: Promise<ITodoItem[]>;
  public showError = false;

  ngOnInit() {
    this.refresh();
  }

  private refresh() {
    this.todoList =
        this.httpClient.get<ITodoItem[]>('http://localhost:8080/api/todos')
            .toPromise();
  }

  public async save() {
    this.showError = false;
    if (this.description && this.assignedTo) {
      try {
        await this.httpClient
            .post(
                'http://localhost:8080/api/todos',
                {description: this.description, assignedTo: this.assignedTo})
            .toPromise();
      } catch (ex) {
        this.showError = true;
      }
      this.refresh();
    }
  }
}
