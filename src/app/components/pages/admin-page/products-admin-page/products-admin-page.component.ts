import { Component, OnInit } from '@angular/core';

import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  templateUrl: './products-admin-page.component.html',
  styleUrls: ['./products-admin-page.component.scss'],
})
export class ProductsAdminPageComponent implements OnInit {
  products: Product[] = [];
  filterText: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe((response) => {
      this.products = response.Data;
    });
  }

  editProduct(product: Product) {
    this.router.navigate(['admin', 'products', product.ProductID]);
  }
}
