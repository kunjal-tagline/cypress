import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public customerId: any = localStorage.getItem('customerId');
  public cartArrayCheck: any = [];
  public allCarts: any = [];
  public myCartList$: any = new BehaviorSubject([]);

  public basePath = this.db.database.ref('/cart');

  constructor(private db: AngularFireDatabase) {}

  public productAddCart(cartData: any) {
    return new Promise((resolve, reject) => {
      this.basePath.push(cartData);
      resolve(cartData);
    });
  }

  public updateCartProduct(cartId: string, productDetails: any) {
    return new Promise((resolve, reject) => {
      const basePath = this.db.database.ref('/cart/' + cartId);
      basePath.update(productDetails);
      resolve(productDetails);
    });
  }

  /**
   * updateCart
   */
  public updateCart() {
    const basePath = this.db.database.ref(
      '/cart/' + this.cartArrayCheck.cartId
    );
    const data = {
      ...this.cartArrayCheck,
      qty: this.cartArrayCheck.qty + 1,
    };
    basePath.update(data);
  }

  public checkCartProducts(productId: string, productData: any): void {
    this.getAllCarts().then(() => {
      this.findUpdateCart(productId);
      if (this.cartArrayCheck) {
        this.updateCart();
      } else {
        const data = {
          customerId: this.customerId,
          productId: productId,
          qty: 1,
        };
        this.getAllCarts();
        this.productAddCart(data);
      }
    });
  }

  public getAllCarts(): any {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        this.allCarts = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            cartId: key,
          };
        });
        this.myCartList$.next(
          this.allCarts.filter(
            (element: any) => element.customerId === this.customerId
          )
        );

        resolve(this.allCarts);
      });
    });
  }

  public findUpdateCart(productId: string): void {
    this.cartArrayCheck = this.allCarts.find(
      (element: any) =>
        element.productId === productId &&
        element.customerId === this.customerId
    );
  }
}
