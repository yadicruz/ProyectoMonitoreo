/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CirculoComponent } from './circulo.component';

describe('CirculoComponent', () => {
  let component: CirculoComponent;
  let fixture: ComponentFixture<CirculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
