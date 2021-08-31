import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Shipper from 'src/app/models/shipper';
import { ShipperService } from 'src/app/services/shipper.service';

@Component({
  selector: 'app-shipper-admin-page',
  templateUrl: './shipper-admin-page.component.html',
  styleUrls: ['./shipper-admin-page.component.scss'],
})
export class ShipperAdminPageComponent implements OnInit {
  shippers: Shipper[] = [];
  filterText: string = '';

  constructor(private shipperService: ShipperService, private router: Router) {}

  ngOnInit(): void {
    this.getShippers();
  }

  getShippers() {
    this.shipperService.getAll().subscribe((response) => {
      this.shippers = response.Data;
    });
  }

  editShipper(shipper: Shipper) {
    this.router.navigate(['admin', 'shippers', shipper.ShipperID]);
  }
}
