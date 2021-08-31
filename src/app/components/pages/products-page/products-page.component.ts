import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;
  filterText: string = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryID'])
        this.getProductsByCategory(params['categoryID']);
      else this.getProducts();
    });
  }

  getProducts() {
    this.productService.getAll().subscribe((response) => {
      this.products = response.Data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryID: number) {
    this.productService.getByCategory(categoryID).subscribe((response) => {
      this.products = response.Data;
      this.dataLoaded = true;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);

    this.toastrService.success(product.ProductName, 'Added to cart.');
  }
}
