import { TestBed, inject } from '@angular/core/testing';

import { LogeoServiceService } from './logeo-service.service';

describe('LogeoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogeoServiceService]
    });
  });

  it('should be created', inject([LogeoServiceService], (service: LogeoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
