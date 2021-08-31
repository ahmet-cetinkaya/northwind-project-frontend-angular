import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailAdminPageComponent } from './order-detail-admin-page.component';

describe('OrderDetailAdminPageComponent', () => {
  let component: OrderDetailAdminPageComponent;
  let fixture: ComponentFixture<OrderDetailAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
