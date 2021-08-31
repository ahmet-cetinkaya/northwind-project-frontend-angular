import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormPageComponent } from './customer-form-page.component';

describe('CustomerFormPageComponent', () => {
  let component: CustomerFormPageComponent;
  let fixture: ComponentFixture<CustomerFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
