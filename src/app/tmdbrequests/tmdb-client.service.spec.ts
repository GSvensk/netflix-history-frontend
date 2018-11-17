import { TestBed } from '@angular/core/testing';

import { TmdbClientService } from './tmdb-client.service';

describe('TmdbClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmdbClientService = TestBed.get(TmdbClientService);
    expect(service).toBeTruthy();
  });
});
