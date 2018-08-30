import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmrechnenComponent } from './turmrechnen.component';
import { FormsModule } from '@angular/forms';

describe('TurmrechnenComponent', () => {
  let component: TurmrechnenComponent;
  let fixture: ComponentFixture<TurmrechnenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TurmrechnenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmrechnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should successfully create', () => {
    expect(component).toBeTruthy();
  });

  it('should indicate error if height is lower 2', () => {
    component.height = 1;
    expect(component.isModelValid()).toBeFalsy();
  });

  it('should result in correct value', () => {
    component.height = 3;
    component.startValue = 2;

    component.calculate();

    expect(component.turmRows[0].baseValue).toBe(
      component.turmRows[component.turmRows.length - 1].result);
  });
});
