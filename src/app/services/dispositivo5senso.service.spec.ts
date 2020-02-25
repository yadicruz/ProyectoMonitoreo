/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dispositivo5sensoService } from './dispositivo5senso.service';

describe('Service: Dispositivo5senso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo5sensoService]
    });
  });

  it('should ...', inject([Dispositivo5sensoService], (service: Dispositivo5sensoService) => {
    expect(service).toBeTruthy();
  }));
});
