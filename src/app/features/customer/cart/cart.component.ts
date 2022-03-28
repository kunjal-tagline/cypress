import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartList: any = [];
  public cartProductDetail: any = [];
  public productId: any = this.cartList.productId;
  constructor(private cartService: CartService) {}

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
    this.cartService.myCartProductDetails().then((res: any) => {
      this.cartProductDetail = res;
    });
  }

  public minusQuantity(productId: any) {}

  public removeProduct(cartId: string): void {
    this.cartService.removeProductFromCart(cartId).then(() => {});
    this.cartProductInfo();
  }
}
