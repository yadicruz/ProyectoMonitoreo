/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dispositivo2sensoService } from './dispositivo2senso.service';

describe('Service: Dispositivo2senso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo2sensoService]
    });
  });

  it('should ...', inject([Dispositivo2sensoService], (service: Dispositivo2sensoService) => {
    expect(service).toBeTruthy();
  }));
});
