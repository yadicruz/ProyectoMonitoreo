/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SueloGComponent } from './sueloG.component';

describe('SueloGComponent', () => {
  let component: SueloGComponent;
  let fixture: ComponentFixture<SueloGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SueloGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SueloGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
