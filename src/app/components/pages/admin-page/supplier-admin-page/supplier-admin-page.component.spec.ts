import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAdminPageComponent } from './supplier-admin-page.component';

describe('SupplierAdminPageComponent', () => {
  let component: SupplierAdminPageComponent;
  let fixture: ComponentFixture<SupplierAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
