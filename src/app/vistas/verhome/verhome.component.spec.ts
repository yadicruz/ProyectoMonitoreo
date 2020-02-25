import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHomeComponent } from './verhome.component';

describe('VerhomeComponent', () => {
  let component: VerHomeComponent;
  let fixture: ComponentFixture<VerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
