import { CartService } from 'src/app/shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public cartListLength = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.myCartList$.subscribe((cartList:any) => {
      this.cartListLength = cartList.length | 0;
    });
  }
}
