import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireForm } from './hire-form';

describe('HireForm', () => {
  let component: HireForm;
  let fixture: ComponentFixture<HireForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
