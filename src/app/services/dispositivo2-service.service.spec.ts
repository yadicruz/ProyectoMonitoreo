import { TestBed, inject } from '@angular/core/testing';

import { Dispositivo2ServiceService } from './dispositivo2-service.service';

describe('Dispositivo2ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo2ServiceService]
    });
  });

  it('should be created', inject([Dispositivo2ServiceService], (service: Dispositivo2ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
