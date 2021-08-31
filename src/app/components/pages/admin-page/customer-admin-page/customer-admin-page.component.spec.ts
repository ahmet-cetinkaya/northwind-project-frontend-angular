import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAdminPageComponent } from './customer-admin-page.component';

describe('CustomerAdminPageComponent', () => {
  let component: CustomerAdminPageComponent;
  let fixture: ComponentFixture<CustomerAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
