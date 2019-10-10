import { TestBed } from '@angular/core/testing';

import { MentorserviceService } from './mentorservice.service';

describe('MentorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorserviceService = TestBed.get(MentorserviceService);
    expect(service).toBeTruthy();
  });
});
