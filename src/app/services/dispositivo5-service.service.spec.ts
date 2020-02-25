import { TestBed, inject } from '@angular/core/testing';

import { Dispositivo5ServiceService } from './dispositivo5-service.service';

describe('Dispositivo5ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo5ServiceService]
    });
  });

  it('should be created', inject([Dispositivo5ServiceService], (service: Dispositivo5ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
