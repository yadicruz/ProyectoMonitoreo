import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSensorComponent } from './formularioSensor.component';

describe('FormularioSensorComponent', () => {
  let component: FormularioSensorComponent;
  let fixture: ComponentFixture<FormularioSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
