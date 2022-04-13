import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { analyticsInstanceFactory } from '@angular/fire/analytics/analytics.module';

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

  public quantityMinus(productId: any) {}

  public quantityPlus(cartId: any) {
    let productDetails: any = {};
    this.cartProductDetail.forEach((res: any) => {
      //console.log('res :>> ', res.cartProducts.cartId);
      //console.log('cartId :>> ', cartId);
      if (res.cartProducts.cartId == cartId) {
        //console.log('cartId :>> ', cartId);
        productDetails={
        ...res,
        quantity: res.quantity + 1
       };
        //console.log('data :>> ', productDetails);
        //console.log('res :>> ', res);
        this.cartService.updateCartqty(cartId, productDetails).then(() => {
          this.cartProductInfo();
       });
      }
    });
  }
  // public qtyPlus(id: any) {
  //   let data: any = {};
  //   this.allCartItems.forEach((res) => {
  //     if (res.cartId === id) {
  //       data = {
  //         ...res,
  //         qty: res.qty + 1
  //       }
  //       this.cartService.updateCartqty(id, data).then(() => {
  //         this.getAllCarts();
  //       });
  //     }
  //   })
  // }


  public removeProduct(cartId: string): void {
    this.cartService.removeProductFromCart(cartId).then(() => {});
    this.cartProductInfo();
  }
}
