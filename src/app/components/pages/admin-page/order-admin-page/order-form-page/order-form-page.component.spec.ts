import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormPageComponent } from './order-form-page.component';

describe('OrderFormPageComponent', () => {
  let component: OrderFormPageComponent;
  let fixture: ComponentFixture<OrderFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
