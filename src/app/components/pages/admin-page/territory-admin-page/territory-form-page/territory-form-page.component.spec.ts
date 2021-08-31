import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryFormPageComponent } from './territory-form-page.component';

describe('TerritoryFormPageComponent', () => {
  let component: TerritoryFormPageComponent;
  let fixture: ComponentFixture<TerritoryFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritoryFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
