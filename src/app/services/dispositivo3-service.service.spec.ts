import { TestBed, inject } from '@angular/core/testing';

import { Dispositivo3ServiceService } from './dispositivo3-service.service';

describe('Dispositivo3ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo3ServiceService]
    });
  });

  it('should be created', inject([Dispositivo3ServiceService], (service: Dispositivo3ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
