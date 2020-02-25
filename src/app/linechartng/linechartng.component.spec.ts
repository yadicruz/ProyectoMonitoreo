import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartngComponent } from './linechartng.component';

describe('LinechartngComponent', () => {
  let component: LinechartngComponent;
  let fixture: ComponentFixture<LinechartngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
