import { AdminService } from './../../../shared/services/admin.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartList: any = [];
  public productId: any = this.cartList.productId;
  constructor(
    private cartService: CartService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.showCartProducts();
    this.cartProductInfo();
  }

  public showCartProducts(): void {
    this.cartService.getAllCarts();
    this.cartService.myCartList$.subscribe((cartList: any) => {
      this.cartList = cartList;
    });
  }

  public cartProductInfo(): void {
    this.cartService.myCartProductDetails().then(() => {});
  }

  public removeProduct(cartId: string): void {
    this.cartService.removeProductFromCart(cartId).then(() => {});
  }
}
