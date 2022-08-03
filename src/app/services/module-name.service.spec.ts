import { TestBed } from '@angular/core/testing';

import { ModuleNameService } from './module-name.service';

describe('ModuleNameService', () => {
  let service: ModuleNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
