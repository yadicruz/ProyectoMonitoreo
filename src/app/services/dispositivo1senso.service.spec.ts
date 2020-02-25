/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dispositivo1sensoService } from './dispositivo1senso.service';

describe('Service: Dispositivo1senso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo1sensoService]
    });
  });

  it('should ...', inject([Dispositivo1sensoService], (service: Dispositivo1sensoService) => {
    expect(service).toBeTruthy();
  }));
});
