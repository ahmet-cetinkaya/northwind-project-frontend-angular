import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Order from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-form-page',
  templateUrl: './order-form-page.component.html',
  styleUrls: ['./order-form-page.component.scss'],
})
export class OrderFormPageComponent implements OnInit {
  orderForm!: FormGroup;
  order?: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditPage();
    this.createOrderAddForm();
  }

  isEditPage() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['orderID']) {
        this.getOrderById(params['orderID']);
      }
    });
  }

  getOrderById(id: number) {
    this.orderService.getById(id).subscribe((response) => {
      if (!response.Success) return;
      this.order = response.Data;
      this.createOrderEditForm();
    });
  }

  createOrderEditForm() {
    this.orderForm = this.formBuilder.group({
      CustomerID: [this.order?.CustomerID, Validators.required],
      EmployeeID: [this.order?.EmployeeID, Validators.required],
      CategOrderDateoryID: [this.order?.OrderDate, Validators.required],
      RequiredDate: [this.order?.RequiredDate, Validators.required],
      UniShippedDatetPrice: [this.order?.ShippedDate, Validators.required],
      ShipVia: [this.order?.ShipVia, Validators.required],
      Freight: [this.order?.Freight, Validators.required],
      ShipName: [this.order?.ShipName, Validators.required],
      ShipAddress: [this.order?.ShipAddress, Validators.required],
      ShipCity: [this.order?.ShipCity, Validators.required],
      ShipRegion: [this.order?.ShipRegion, Validators.required],
      ShipPostalCode: [this.order?.ShipPostalCode, Validators.required],
      ShipCountry: [this.order?.ShipCountry, Validators.required],
    });
  }

  createOrderAddForm() {
    this.orderForm = this.formBuilder.group({
      CustomerID: ['', Validators.required],
      EmployeeID: ['', Validators.required],
      CategOrderDateoryID: ['', Validators.required],
      RequiredDate: ['', Validators.required],
      UniShippedDatetPrice: ['', Validators.required],
      ShipVia: ['', Validators.required],
      Freight: ['', Validators.required],
      ShipName: ['', Validators.required],
      ShipAddress: ['', Validators.required],
      ShipCity: ['', Validators.required],
      ShipRegion: ['', Validators.required],
      ShipPostalCode: ['', Validators.required],
      ShipCountry: ['', Validators.required],
    });
  }

  add() {
    if (!this.orderForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let order: Order = { ...this.orderForm.value };
    this.orderService.add(order).subscribe(
      (response) => {
        if (!response.Success) return;
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'orders']);
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
    if (!this.orderForm.valid) {
      this.toastrService.error('Please fill in the missing fields');
      return;
    }

    let orderModule: Order = { ...this.order, ...this.orderForm.value };
    this.orderService.edit(orderModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'orders']);
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

    let orderModule: Order = { ...this.order, ...this.orderForm.value };
    this.orderService.delete(orderModule).subscribe(
      (response) => {
        this.toastrService.success(response.Message);
        this.router.navigate(['admin', 'orders']);
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
