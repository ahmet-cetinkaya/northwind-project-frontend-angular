import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailFormPageComponent } from './order-detail-form-page.component';

describe('OrderDetailFormPageComponent', () => {
  let component: OrderDetailFormPageComponent;
  let fixture: ComponentFixture<OrderDetailFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
