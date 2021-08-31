import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTerritoryAdminPageComponent } from './employee-territory-admin-page.component';

describe('EmployeeTerritoryAdminPageComponent', () => {
  let component: EmployeeTerritoryAdminPageComponent;
  let fixture: ComponentFixture<EmployeeTerritoryAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTerritoryAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTerritoryAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
