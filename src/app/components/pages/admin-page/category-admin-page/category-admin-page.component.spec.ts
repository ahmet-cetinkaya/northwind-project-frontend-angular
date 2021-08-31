import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminPageComponent } from './category-admin-page.component';

describe('CategoryAdminPageComponent', () => {
  let component: CategoryAdminPageComponent;
  let fixture: ComponentFixture<CategoryAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
