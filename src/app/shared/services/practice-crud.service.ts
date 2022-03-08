import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class PracticeCrudService {
  public basePath = this.db.database.ref('/cart');
  constructor(private db: AngularFireDatabase) {
    //this.createCartData();
    this.getAllCarts();
    //this.removeCartData();
    this.updaterCartData();
  }

  public createCartData(): void {
    const cartData = {
      productName: 'product1',
      productId: 123,
      price: 4000,
    };
    this.basePath.push(cartData);
  }

  public getAllCarts(): void {
    this.basePath.on('value', (data: any) => {
      const allCarts = Object.keys(data.val()).map((key) => {
        return {
          ...data.val()[key],
          cartId: key,
        };
      });
      console.log('allCarts:>> ', allCarts);
    });
  }

  public removeCartData(id: string = '-MxcsuUPcIzadlbYkYrp') {
    const basePath = this.db.database.ref('/cart/' + id);
    basePath.remove();
  }

  public updaterCartData(): void {
    const cartData = {
      productName: 'product123',
      productId: 12345,
      price: 50000,
    };
    const basePath = this.db.database.ref('/cart/' + '-Mxcv0ipI-hi9AAHKoCf');
    basePath.update(cartData);
  }
}
