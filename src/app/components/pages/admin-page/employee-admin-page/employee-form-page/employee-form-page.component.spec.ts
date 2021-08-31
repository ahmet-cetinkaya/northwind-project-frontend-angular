import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormPageComponent } from './employee-form-page.component';

describe('EmployeeFormPageComponent', () => {
  let component: EmployeeFormPageComponent;
  let fixture: ComponentFixture<EmployeeFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
