import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormPageComponent } from './category-form-page.component';

describe('CategoryFormPageComponent', () => {
  let component: CategoryFormPageComponent;
  let fixture: ComponentFixture<CategoryFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
