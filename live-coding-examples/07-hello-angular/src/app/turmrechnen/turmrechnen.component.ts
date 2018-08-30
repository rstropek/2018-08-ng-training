import {Component} from '@angular/core';

class IResultRow {
  baseValue: number;
  operator: string;
  multiplicator: number;
  result: number;
}

@Component({
  selector: 'app-turmrechnen',
  templateUrl: './turmrechnen.component.html',
  styleUrls: ['./turmrechnen.component.css']
})
export class TurmrechnenComponent {
  public startValue = 5;
  public height = 4;
  public turmRows: IResultRow[] = [];

  public isModelValid(): boolean {
    return this.height >= 2;
  }

  public calculate(): void {
    this.turmRows = [];

    let currentValue = this.startValue;
    for (let i = 2; i <= this.height; i++) {
      this.turmRows.push({
        baseValue: currentValue,
        operator: '*',
        multiplicator: i,
        result: currentValue = currentValue * i
      });
    }

    for (let i = 2; i <= this.height; currentValue /= i++) {
      const row: IResultRow = {
        baseValue: currentValue,
        operator: '/',
        multiplicator: i,
        result: currentValue / i
      };
      this.turmRows.push(row);
    }
  }
}
