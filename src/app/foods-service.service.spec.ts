import { TestBed, inject } from '@angular/core/testing';

import { FoodsServiceService } from './foods-service.service';

describe('FoodsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodsServiceService]
    });
  });

  it('should be created', inject([FoodsServiceService], (service: FoodsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
