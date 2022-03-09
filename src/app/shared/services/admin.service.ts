import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public basePath = this.db.database.ref('/products');

  constructor(private db: AngularFireDatabase) {}

  public addProduct(productDetails: any) {
    this.basePath.push(productDetails);
  }

  /**
   * getProductList
   */
  public getProductList() {
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

  public removeproductById(id: string): void {
    const basePath = this.db.database.ref('/products/' + id);
    basePath.remove();
  }

  public editProductById(id: StringConstructor, productDetails: any): void {
    const basePath = this.db.database.ref('/products/' + id);
    basePath.update(productDetails);
  }
}
