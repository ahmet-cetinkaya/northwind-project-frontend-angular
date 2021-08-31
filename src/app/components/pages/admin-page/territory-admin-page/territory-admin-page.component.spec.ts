import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryAdminPageComponent } from './territory-admin-page.component';

describe('TerritoryAdminPageComponent', () => {
  let component: TerritoryAdminPageComponent;
  let fixture: ComponentFixture<TerritoryAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritoryAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
