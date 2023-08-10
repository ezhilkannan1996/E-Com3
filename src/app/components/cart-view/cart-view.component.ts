import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCart(this.cartItems);
    }
  }

  checkout(): void {
    // Implement your checkout logic here
    // For example, clear the cart and redirect to payment page
    this.cartService.clearCart();
    // Redirect to payment page or order summary
  }


  //cart modification
  buyNow(item : any){

  }
  buyProducts(cartitems : any){

  }

  increaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    }
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    } else if (item.quantity > 0) {
      item.quantity--;
    }
  }

  get totalOrderPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity ? item.price * item.quantity : 0), 0);
  }
}
