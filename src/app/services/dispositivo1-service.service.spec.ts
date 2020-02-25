import { TestBed, inject } from '@angular/core/testing';

import { Dispositivo1ServiceService } from './dispositivo1-service.service';

describe('Dispositivo1ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo1ServiceService]
    });
  });

  it('should be created', inject([Dispositivo1ServiceService], (service: Dispositivo1ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
