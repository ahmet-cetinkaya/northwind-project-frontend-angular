import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Category from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form-page',
  templateUrl: './category-form-page.component.html',
  styleUrls: ['./category-form-page.component.scss'],
})
export class CategoryFormPageComponent implements OnInit {
  categoryForm!: FormGroup;
  category?: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createCategoryAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryID']) {
        this.getCategoryById(params['categoryID']);
      }
    });
  }

  getCategoryById(id: number) {
    this.categoryService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.category = response.Data;
      this.createCategoryEditForm();
    });
  }

  createCategoryEditForm() {
    this.categoryForm = this.formBuilder.group({
      CategoryName: [this.category?.CategoryName, Validators.required],
      Description: [this.category?.Description, Validators.required],
    });
  }

  createCategoryAddForm() {
    this.categoryForm = this.formBuilder.group({
      CategoryName: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }

  add() {
    if (!this.categoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let category: Category = { ...this.categoryForm.value };
    this.categoryService.add(category).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'categories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }

  edit() {
    if (!this.categoryForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let categoryModule: Category = {
      ...this.category,
      ...this.categoryForm.value,
    };
    this.categoryService.edit(categoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'categories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }

  delete_() {
    if (!confirm('Are you sure to delete it?')) return;

    let categoryModule: Category = {
      ...this.category,
      ...this.categoryForm.value,
    };
    this.categoryService.delete(categoryModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'categories']);
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          responseError.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage);
          });
        }
      }
    );
  }
}
