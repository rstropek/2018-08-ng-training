import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  todoItems: string[] = ['asdf', 'yxcv'];

  greeting = 'Hello';
  myNumber = 42;
  itemToAdd: string;

  constructor() { }

  ngOnInit() {
  }

  addTodoItem() {
    if (this.itemToAdd) {
      this.todoItems.push(this.itemToAdd);
      this.itemToAdd = '';
    }
  }

  isEnabled() {
    return this.calculateSomething(this.myNumber) === 42;
  }

  calculateSomething(x: number): number {
    return x / 2;
  }

}
