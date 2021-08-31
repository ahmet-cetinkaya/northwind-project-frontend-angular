import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Customer from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form-page',
  templateUrl: './customer-form-page.component.html',
  styleUrls: ['./customer-form-page.component.scss'],
})
export class CustomerFormPageComponent implements OnInit {
  customerForm!: FormGroup;
  customer?: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createCustomerAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['customerID']) {
        this.getCustomerById(params['customerID']);
      }
    });
  }

  getCustomerById(id: number) {
    this.customerService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.customer = response.Data;
      this.createCustomerEditForm();
    });
  }

  createCustomerEditForm() {
    this.customerForm = this.formBuilder.group({
      CustomerID: [this.customer?.CustomerID, Validators.required],
      CompanyName: [this.customer?.CompanyName, Validators.required],
      ContactName: [this.customer?.ContactName, Validators.required],
      ContactTitle: [this.customer?.ContactTitle, Validators.required],
      Address: [this.customer?.Address, Validators.required],
      City: [this.customer?.City, Validators.required],
      Region: [this.customer?.Region, Validators.required],
      PostalCode: [this.customer?.PostalCode, Validators.required],
      Country: [this.customer?.Country, Validators.required],
      Phone: [this.customer?.Phone, Validators.required],
      Fax: [this.customer?.Fax, Validators.required],
    });
  }

  createCustomerAddForm() {
    this.customerForm = this.formBuilder.group({
      CustomerID: ['', Validators.required],
      CompanyName: ['', Validators.required],
      ContactName: ['', Validators.required],
      ContactTitle: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      Region: ['', Validators.required],
      PostalCode: ['', Validators.required],
      Country: ['', Validators.required],
      Phone: ['', Validators.required],
      Fax: ['', Validators.required],
    });
  }

  add() {
    if (!this.customerForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let customer: Customer = { ...this.customerForm.value };
    this.customerService.add(customer).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'customers']);
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
    if (!this.customerForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let customerModule: Customer = {
      ...this.customer,
      ...this.customerForm.value,
    };
    this.customerService
      .edit(customerModule, this.customer?.CustomerID)
      .subscribe(
        (response) => {
          this.toastrService.success(response.Message);
          this.router.navigate(['admin', 'customers']);
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
    if (this.customer === undefined) return;
    if (!confirm('Are you sure to delete it?')) return;

    this.customerService.delete(this.customer).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'customers']);
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
