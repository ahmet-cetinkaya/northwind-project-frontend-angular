import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTerritoryFormPageComponent } from './employee-territory-form-page.component';

describe('EmployeeTerritoryFormPageComponent', () => {
  let component: EmployeeTerritoryFormPageComponent;
  let fixture: ComponentFixture<EmployeeTerritoryFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTerritoryFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTerritoryFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
