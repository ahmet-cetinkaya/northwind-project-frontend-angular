import { Component, OnInit } from '@angular/core';

import Order from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-admin-page',
  templateUrl: './order-admin-page.component.html',
  styleUrls: ['./order-admin-page.component.scss'],
})
export class OrderAdminPageComponent implements OnInit {
  orders: Order[] = [];
  filterText: string = '';

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAll().subscribe((response) => {
      this.orders = response.Data;
    });
  }

  editOrder(order: Order) {
    this.router.navigate(['admin', 'orders', order.OrderID]);
  }
}
