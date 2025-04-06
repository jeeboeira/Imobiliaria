import { TestBed } from '@angular/core/testing';

import { CasaServService } from './casa-serv.service';

describe('CasaService', () => {
  let service: CasaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
