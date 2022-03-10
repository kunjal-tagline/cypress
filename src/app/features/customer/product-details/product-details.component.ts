import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productDetailGet: any = [];
  public productsDetail: any = localStorage.getItem('productDetailsById');
  public customerId: any = localStorage.getItem('customerId');
  public productData = JSON.parse(this.productsDetail);
  public cartData = {
    productName: this.productData.productName,
    category: this.productData.category,
    productPrice: this.productData.productPrice,
    cartId: this.productData.cartId,
    imagePath: this.productData.imagePath,
    productDetail: this.productData.productDetail,
    returnTime: this.productData.returnTime,
    customerId: this.customerId,
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.productDetailRetrive();
  }

  public productDetailRetrive(): void {
    this.productDetailGet = [this.productData];
  }

  public addToCart() {
    this.cartService.productAddCart(this.cartData).then(() => {});
  }
}
