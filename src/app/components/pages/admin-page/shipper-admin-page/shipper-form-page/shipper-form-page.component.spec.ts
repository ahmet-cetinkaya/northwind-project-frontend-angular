import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperFormPageComponent } from './shipper-form-page.component';

describe('ShipperFormPageComponent', () => {
  let component: ShipperFormPageComponent;
  let fixture: ComponentFixture<ShipperFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
