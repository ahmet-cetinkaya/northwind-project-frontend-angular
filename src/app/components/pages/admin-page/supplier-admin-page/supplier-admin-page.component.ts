import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Supplier from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-admin-page',
  templateUrl: './supplier-admin-page.component.html',
  styleUrls: ['./supplier-admin-page.component.scss'],
})
export class SupplierAdminPageComponent implements OnInit {
  suppliers: Supplier[] = [];
  filterText: string = '';

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getAll().subscribe((response) => {
      this.suppliers = response.Data;
    });
  }

  editSupplier(supplier: Supplier) {
    this.router.navigate(['admin', 'suppliers', supplier.SupplierID]);
  }
}
