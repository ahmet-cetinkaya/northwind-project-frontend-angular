import { Component, OnInit } from '@angular/core';

import CartItem from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  cartItems!: CartItem[];

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);

    this.toastrService.error(product.ProductName, 'Removed from cart');
  }
}
