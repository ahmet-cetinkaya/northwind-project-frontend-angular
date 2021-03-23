import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (!this.productAddForm.valid) {
      this.toastrService.error('Formda eksik alanlar var.', 'Hata');
      return;
    }

    let productModule: Product = { ...this.productAddForm.value };
    this.productService.add(productModule).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Başarılı');
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
