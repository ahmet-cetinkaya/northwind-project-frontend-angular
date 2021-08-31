import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperAdminPageComponent } from './shipper-admin-page.component';

describe('ShipperAdminPageComponent', () => {
  let component: ShipperAdminPageComponent;
  let fixture: ComponentFixture<ShipperAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
