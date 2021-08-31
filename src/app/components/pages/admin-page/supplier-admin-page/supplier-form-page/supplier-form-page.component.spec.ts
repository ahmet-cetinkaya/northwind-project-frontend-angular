import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFormPageComponent } from './supplier-form-page.component';

describe('SupplierFormPageComponent', () => {
  let component: SupplierFormPageComponent;
  let fixture: ComponentFixture<SupplierFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
