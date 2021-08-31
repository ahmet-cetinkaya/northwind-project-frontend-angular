import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form-page',
  templateUrl: './product-form-page.component.html',
  styleUrls: ['./product-form-page.component.scss'],
})
export class ProductFormPageComponent implements OnInit {
  productForm!: FormGroup;
  product?: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createProductAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['productID']) {
        this.getProductById(params['productID']);
      }
    });
  }

  getProductById(id: number) {
    this.productService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.product = response.Data;
      this.createProductEditForm();
    });
  }

  createProductEditForm() {
    this.productForm = this.formBuilder.group({
      ProductName: [this.product?.ProductName, Validators.required],
      SupplierID: [this.product?.SupplierID, Validators.required],
      CategoryID: [this.product?.CategoryID, Validators.required],
      QuantityPerUnit: [this.product?.QuantityPerUnit, Validators.required],
      UnitPrice: [this.product?.UnitPrice, Validators.required],
      UnitsInStock: [this.product?.UnitsInStock, Validators.required],
      UnitsOnOrder: [this.product?.UnitsOnOrder, Validators.required],
      ReorderLevel: [this.product?.ReorderLevel, Validators.required],
      Discontinued: [this.product?.Discontinued, Validators.required],
    });
  }

  createProductAddForm() {
    this.productForm = this.formBuilder.group({
      ProductName: ['', Validators.required],
      SupplierID: ['', Validators.required],
      CategoryID: ['', Validators.required],
      QuantityPerUnit: ['', Validators.required],
      UnitPrice: ['', Validators.required],
      UnitsInStock: ['', Validators.required],
      UnitsOnOrder: ['', Validators.required],
      ReorderLevel: ['', Validators.required],
      Discontinued: [false, Validators.required],
    });
  }

  add() {
    if (!this.productForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let product: Product = { ...this.productForm.value };
    this.productService.add(product).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'products']);
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
    if (!this.productForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let productModule: Product = { ...this.product, ...this.productForm.value };
    this.productService.edit(productModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'products']);
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

    let productModule: Product = { ...this.product, ...this.productForm.value };
    this.productService.delete(productModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'products']);
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
