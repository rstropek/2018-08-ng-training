import { Component, OnInit, Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

// Custom validation directives
export function validateRevenue(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
      // Revenue has to be > 100 or empty.
      if (!control.value || parseFloat(control.value) > 100) {

          // Note that null means "no error"
          return null;
      } else {
          return { 'invalidRevenue': true };
      }
  };
}

// This custom directive demonstrates the use a a custom validator
@Directive({
  selector: '[appRevenueInput]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RevenueValidatorDirective, multi: true }]
})
export class RevenueValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
      return validateRevenue()(control);
  }
}

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public todoItem = {
    id: 1000,
    description: 'Test',
    assignedTo: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
