import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSensorComponent } from './listadoSensor.component';

describe('ListadoSensorComponent', () => {
  let component: ListadoSensorComponent;
  let fixture: ComponentFixture<ListadoSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
