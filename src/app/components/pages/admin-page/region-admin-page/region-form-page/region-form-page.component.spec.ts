import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFormPageComponent } from './region-form-page.component';

describe('RegionFormPageComponent', () => {
  let component: RegionFormPageComponent;
  let fixture: ComponentFixture<RegionFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
