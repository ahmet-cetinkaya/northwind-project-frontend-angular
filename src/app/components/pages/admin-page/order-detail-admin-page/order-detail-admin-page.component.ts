import { Component, OnInit } from '@angular/core';

import OrderDetail from 'src/app/models/orderDetail';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail-admin-page',
  templateUrl: './order-detail-admin-page.component.html',
  styleUrls: ['./order-detail-admin-page.component.scss'],
})
export class OrderDetailAdminPageComponent implements OnInit {
  orderDetails: OrderDetail[] = [];
  filterText: string = '';

  constructor(
    private orderDetailService: OrderDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.orderDetailService.getAll().subscribe((response) => {
      this.orderDetails = response.Data;
    });
  }

  editOrderDetail(orderDetail: OrderDetail) {
    this.router.navigate(['admin', 'orderdetails', orderDetail.OrderID]);
  }
}
