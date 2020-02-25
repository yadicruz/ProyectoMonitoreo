/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dispositivo4sensoService } from './dispositivo4senso.service';

describe('Service: Dispositivo4senso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo4sensoService]
    });
  });

  it('should ...', inject([Dispositivo4sensoService], (service: Dispositivo4sensoService) => {
    expect(service).toBeTruthy();
  }));
});
