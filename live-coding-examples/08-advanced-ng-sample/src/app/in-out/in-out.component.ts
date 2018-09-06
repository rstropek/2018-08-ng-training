import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {
  @Input() page = 1;
  @Output() nextPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onNext() {
    this.page++;
    this.nextPage.emit(null);
  }

}
