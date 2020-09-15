import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoInExComponent } from './monitoreoInEx.component';

describe('MonitoreoInExComponent', () => {
  let component: MonitoreoInExComponent;
  let fixture: ComponentFixture<MonitoreoInExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoreoInExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoInExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
