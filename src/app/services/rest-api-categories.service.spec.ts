import { TestBed } from '@angular/core/testing';

import { RestApiCategoriesService } from './rest-api-categories.service';

describe('RestApiCategoriesService', () => {
  let service: RestApiCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
