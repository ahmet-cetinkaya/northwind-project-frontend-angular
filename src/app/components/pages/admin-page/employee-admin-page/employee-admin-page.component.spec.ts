import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAdminPageComponent } from './employee-admin-page.component';

describe('EmployeeAdminPageComponent', () => {
  let component: EmployeeAdminPageComponent;
  let fixture: ComponentFixture<EmployeeAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
