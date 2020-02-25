import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSensorComponent } from './verSensor.component';

describe('VerSensorComponent', () => {
  let component: VerSensorComponent;
  let fixture: ComponentFixture<VerSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
