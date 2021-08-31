import { Component, OnInit } from '@angular/core';

import Category from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory?: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response.Data;
    });
  }

  setCurrentCategory(category?: Category) {
    this.currentCategory = category;
  }

  isActive(category?: Category): string {
    return this.currentCategory?.CategoryID == category?.CategoryID
      ? 'active'
      : '';
  }
}
