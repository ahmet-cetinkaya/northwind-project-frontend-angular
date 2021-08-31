import { Component, OnInit } from '@angular/core';

import Category from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-admin-page',
  templateUrl: './category-admin-page.component.html',
  styleUrls: ['./category-admin-page.component.scss'],
})
export class CategoryAdminPageComponent implements OnInit {
  categories: Category[] = [];
  filterText: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response.Data;
    });
  }

  editCategory(category: Category) {
    this.router.navigate(['admin', 'categories', category.CategoryID]);
  }
}
