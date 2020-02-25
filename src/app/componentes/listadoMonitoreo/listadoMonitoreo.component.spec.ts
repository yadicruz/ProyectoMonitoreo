import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMonitoreoComponent } from './listadoMonitoreo.component';

describe('ListadoComponent', () => {
  let component: ListadoMonitoreoComponent;
  let fixture: ComponentFixture<ListadoMonitoreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMonitoreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
