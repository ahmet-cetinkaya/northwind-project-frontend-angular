import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Supplier from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-form-page',
  templateUrl: './supplier-form-page.component.html',
  styleUrls: ['./supplier-form-page.component.scss'],
})
export class SupplierFormPageComponent implements OnInit {
  supplierForm!: FormGroup;
  supplier?: Supplier;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createSupplierAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['supplierID']) {
        this.getSupplierById(params['supplierID']);
      }
    });
  }

  getSupplierById(id: number) {
    this.supplierService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.supplier = response.Data;
      this.createSupplierEditForm();
    });
  }

  createSupplierEditForm() {
    this.supplierForm = this.formBuilder.group({
      CompanyName: [this.supplier?.CompanyName, Validators.required],
      ContactName: [this.supplier?.ContactName, Validators.required],
      ContactTitle: [this.supplier?.ContactTitle, Validators.required],
      QuanAddresstityPerUnit: [this.supplier?.Address, Validators.required],
      City: [this.supplier?.City, Validators.required],
      Region: [this.supplier?.Region, Validators.required],
      PostalCode: [this.supplier?.PostalCode, Validators.required],
      Phone: [this.supplier?.Phone, Validators.required],
      Fax: [this.supplier?.Fax, Validators.required],
      HomePage: [this.supplier?.HomePage, Validators.required],
    });
  }

  createSupplierAddForm() {
    this.supplierForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      ContactName: ['', Validators.required],
      ContactTitle: ['', Validators.required],
      QuanAddresstityPerUnit: ['', Validators.required],
      City: ['', Validators.required],
      Region: ['', Validators.required],
      PostalCode: ['', Validators.required],
      Phone: ['', Validators.required],
      Fax: ['', Validators.required],
      HomePage: ['', Validators.required],
    });
  }

  add() {
    if (!this.supplierForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let supplier: Supplier = { ...this.supplierForm.value };
    this.supplierService.add(supplier).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'suppliers']);
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
    if (!this.supplierForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let supplierModule: Supplier = {
      ...this.supplier,
      ...this.supplierForm.value,
    };
    this.supplierService.edit(supplierModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'suppliers']);
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

    let supplierModule: Supplier = {
      ...this.supplier,
      ...this.supplierForm.value,
    };
    this.supplierService.delete(supplierModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'suppliers']);
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
