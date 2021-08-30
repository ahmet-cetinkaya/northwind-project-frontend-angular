import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  list(): CartItem[] {
    return CartItems;
  }

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.productID === product.productID);
    if (item) ++item.quantity;
    else CartItems.push(new CartItem(product));
  }

  removeFromCart(product: Product) {
    let item = CartItems.find((c) => c.product.productID === product.productID);
    if (item) CartItems.splice(CartItems.indexOf(item), 1);
  }
}
