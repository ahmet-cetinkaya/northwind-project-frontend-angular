import { TestBed } from '@angular/core/testing';

import { EmployeeTerritoryService } from './employee-territory.service';

describe('EmployeeTerritoryService', () => {
  let service: EmployeeTerritoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeTerritoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
