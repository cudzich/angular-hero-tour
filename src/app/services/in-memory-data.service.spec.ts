import { TestBed } from '@angular/core/testing';

import { InMemoryData.Service } from './in-memory-data.service';

describe('InMemoryData.Service', () => {
  let service: InMemoryData.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryData.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
