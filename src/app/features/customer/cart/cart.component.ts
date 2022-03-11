import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartList: any = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.showCartProducts();
  }

  public showCartProducts(): void {
    this.cartService.getAllCarts();
    this.cartService.myCartList$.subscribe((cartList: any) => {
      this.cartList = cartList;
    });
  }
}
