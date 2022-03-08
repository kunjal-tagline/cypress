import { TestBed } from '@angular/core/testing';

import { PracticeCrudService } from 'src/app/shared/services/practice-crud.service';

describe('PracticeCrudService', () => {
  let service: PracticeCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
