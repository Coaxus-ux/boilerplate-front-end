import { TestBed } from '@angular/core/testing';

import { AjustesService } from './settings.service';

describe('AjustesService', () => {
  let service: AjustesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjustesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
