/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dispositivo3sensoService } from './dispositivo3senso.service';

describe('Service: Dispositivo3senso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo3sensoService]
    });
  });

  it('should ...', inject([Dispositivo3sensoService], (service: Dispositivo3sensoService) => {
    expect(service).toBeTruthy();
  }));
});
