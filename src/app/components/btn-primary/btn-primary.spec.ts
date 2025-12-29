import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimary } from './btn-primary';

describe('BtnPrimary', () => {
  let component: BtnPrimary;
  let fixture: ComponentFixture<BtnPrimary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPrimary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPrimary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
