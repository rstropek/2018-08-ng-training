import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add-todo-reactive',
  templateUrl: './add-todo-reactive.component.html',
  styleUrls: ['./add-todo-reactive.component.css']
})
export class AddTodoReactiveComponent implements OnInit {
  public todoForm: FormGroup;

  public filteredPeople: Observable<{name: string}[]>;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      id: [1000],
      description: [
        'Test',
        [
          Validators.required, Validators.minLength(3), Validators.maxLength(10)
        ]
      ],
      assignedTo: []
    });

    this.filteredPeople = this.todoForm.controls.assignedTo.valueChanges
      .pipe(debounceTime(500), switchMap((filter: string) =>
        this.httpClient.get<{name: string}[]>(`http://localhost:8080/api/people?filter=${filter}`)));

  }
}
