import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public basePath = this.db.database.ref('/cart');

  constructor(private db: AngularFireDatabase) {}

  public productAddCart(cartData:any) {
    return new Promise((resolve, reject) => {
      this.basePath.push(cartData);
     
    });
  }
}
