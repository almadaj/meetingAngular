import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterForm } from './newsletter-form';

describe('NewsletterForm', () => {
  let component: NewsletterForm;
  let fixture: ComponentFixture<NewsletterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
