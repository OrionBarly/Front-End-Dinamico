import { TestBed } from '@angular/core/testing';

import { CirculosService } from './circulos.service';

describe('CirculosService', () => {
  let service: CirculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
