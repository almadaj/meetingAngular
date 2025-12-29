import { TestBed } from '@angular/core/testing';

import { Newsletter } from './newsletter';

describe('Newsletter', () => {
  let service: Newsletter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Newsletter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
