/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromediosService } from './promedios.service';

describe('Service: Promedios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromediosService]
    });
  });

  it('should ...', inject([PromediosService], (service: PromediosService) => {
    expect(service).toBeTruthy();
  }));
});
