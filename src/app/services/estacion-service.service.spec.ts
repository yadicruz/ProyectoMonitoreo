import { TestBed, inject } from '@angular/core/testing';

import { EstacionServiceService } from './estacion-service.service';

describe('EstacionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstacionServiceService]
    });
  });

  it('should be created', inject([EstacionServiceService], (service: EstacionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
