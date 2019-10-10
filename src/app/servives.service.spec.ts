import { TestBed } from '@angular/core/testing';

import { ServivesService } from './servives.service';

describe('ServivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServivesService = TestBed.get(ServivesService);
    expect(service).toBeTruthy();
  });
});
