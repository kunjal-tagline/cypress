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
  public cartProductDetail:any;
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
      //console.log('response', cartList);
      this.cartList = cartList;
    });
  }

  public cartProductInfo(): void {
    this.cartService.myCartProductDetails().then((res: any) => {
      this.cartProductDetail =res.cartProducts.values(Array);
        console.log('res :>> ', res);
      
     // console.log('this.cartProductDetail :>> ', this.cartProductDetail);
    })
  }

  public removeProduct(cartId: string): void {
    this.cartService.removeProductFromCart(cartId).then(() => {});
  }
}
