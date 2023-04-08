import { TestBed } from '@angular/core/testing';

import { AppMainServiceService } from './app-main-service.service';

describe('AppMainServiceService', () => {
  let service: AppMainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
