import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionAdminPageComponent } from './region-admin-page.component';

describe('RegionAdminPageComponent', () => {
  let component: RegionAdminPageComponent;
  let fixture: ComponentFixture<RegionAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
