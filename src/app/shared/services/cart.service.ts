import { AdminService } from 'src/app/shared/services/admin.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public customerId: any = localStorage.getItem('customerId');
  public cartArrayCheck: any = [];
  public productId: any = this.cartArrayCheck.productId;
  public allCarts: any = [];
  public myCartList$: any = new BehaviorSubject([]);

  public basePath = this.db.database.ref('/cart');

  constructor(
    private db: AngularFireDatabase,
    private adminService: AdminService
  ) {}

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

  public updateCart(): void {
    const basePath = this.db.database.ref(
      '/cart/' + this.cartArrayCheck.cartId
    );
    const productInfo = {
      ...this.cartArrayCheck,
      quantity: this.cartArrayCheck.quantity + 1,
    };
    basePath.update(productInfo);
  }

  public checkCartProducts(productId: string, productData: any): void {
    this.getAllCarts().then(() => {
      this.findUpdateCart(productId);
      if (this.cartArrayCheck) {
        this.updateCart();
      } else {
        const productInfo = {
          customerId: this.customerId,
          productId: productId,
          quantity: 1,
        };
        this.getAllCarts();
        this.productAddCart(productInfo);
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

  public removeProductFromCart(id: string) {
    const basePath = this.db.database.ref('/cart/' + id);
    return new Promise((resolve, reject) => {
      basePath.remove();
    });
  }

  public myCartProductDetails(): any {
    return new Promise((resolve, reject) => {
      let myTempCart: any[] = [];
      this.getAllCarts();

      this.myCartList$.subscribe((cart: any) => {
        myTempCart = cart;
      });

      this.adminService.getProductList().then((allProducts: any) => {
        let finalCart: any = [];
        myTempCart.forEach((cartCheck: any) => {
          const cartProducts = allProducts.find(
            (element: any) => element.cartId === cartCheck.productId
          );
          const data = {
            cartProducts: cartProducts,
            quantity: cartCheck.quantity,
            cartId: cartCheck.cartId,
          };
          //console.log('data :>> ', data);
          finalCart.push(data);
        });
        resolve(finalCart);
      });
    });
  }
}
