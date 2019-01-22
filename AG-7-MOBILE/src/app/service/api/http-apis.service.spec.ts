import { TestBed } from '@angular/core/testing';

import { HttpApisService } from './http-apis.service';

describe('HttpApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpApisService = TestBed.get(HttpApisService);
    expect(service).toBeTruthy();
  });
});
