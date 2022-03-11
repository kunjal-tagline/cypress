import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public customerId: any = localStorage.getItem('customerId');
  public productDetails: any = [
    JSON.parse(localStorage.getItem('productDetailsById') as any),
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  public addToCart(productId: any): void {
    const data = {
      customerId: this.customerId,
      productId: productId,
      qty: 1,
    };
    this.cartService.productAddCart(data).then(() => {});
  }

  public submitCart(productId: string): void {
    this.cartService.checkCartProducts(productId, this.productDetails);
  }
}
