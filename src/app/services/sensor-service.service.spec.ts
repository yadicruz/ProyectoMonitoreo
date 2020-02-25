import { TestBed, inject } from '@angular/core/testing';

import { SensorServiceService } from './sensor-service.service';

describe('SensorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorServiceService]
    });
  });

  it('should be created', inject([SensorServiceService], (service: SensorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
