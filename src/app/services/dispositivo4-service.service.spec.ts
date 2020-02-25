import { TestBed, inject } from '@angular/core/testing';

import { Dispositivo4ServiceService } from './dispositivo4-service.service';

describe('Dispositivo4ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dispositivo4ServiceService]
    });
  });

  it('should be created', inject([Dispositivo4ServiceService], (service: Dispositivo4ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
