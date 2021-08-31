import { Component, OnInit } from '@angular/core';

import Customer from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-admin-page',
  templateUrl: './customer-admin-page.component.html',
  styleUrls: ['./customer-admin-page.component.scss'],
})
export class CustomerAdminPageComponent implements OnInit {
  customers: Customer[] = [];
  filterText: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getAll().subscribe((response) => {
      this.customers = response.Data;
    });
  }

  editCustomer(customer: Customer) {
    this.router.navigate(['admin', 'customers', customer.CustomerID]);
  }
}
