import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public basePath = this.db.database.ref('/cart');

  constructor(private db: AngularFireDatabase) {}

  public productAddCart(cartData: any) {
    return new Promise((resolve, reject) => {
      this.basePath.push(cartData);
      resolve(cartData);
    });
  }

  public getCartAllProducts() {
    return new Promise((resolve, reject) => {
      this.basePath.on('value', (data: any) => {
        const allProducts = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            cartId: key,
          };
        });
        resolve(allProducts);
      });
    });
  }

  public updateCartProduct(cartId: string, productDetails: any) {
    return new Promise((resolve, reject) => {
      const basePath = this.db.database.ref('/cart/' + cartId);
      basePath.update(productDetails);
      resolve(productDetails);
    });
  }
}
