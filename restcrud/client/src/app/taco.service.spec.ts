import { TestBed, inject } from '@angular/core/testing';

import { TacoService } from './taco.service';

describe('TacoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacoService]
    });
  });

  it('should be created', inject([TacoService], (service: TacoService) => {
    expect(service).toBeTruthy();
  }));
});
