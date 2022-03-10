import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productDetailGet: any = [];

  constructor() {}

  ngOnInit(): void {
    this.productDetailRetrive();
  }

  public productDetailRetrive(): void {
    const productsDetail: any = localStorage.getItem('productDetailsById');
    this.productDetailGet = [JSON.parse(productsDetail)];
  }
}
