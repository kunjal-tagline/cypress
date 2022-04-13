import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'jewellery-shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isDisplayHome = false;
  public hideHome!:boolean;

  constructor(
    private customerService: CustomerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.customerService.selectedCategory$.subscribe(
      (selectedCategory: string) =>
        selectedCategory == 'home'
          ? (this.isDisplayHome = true)
          : (this.isDisplayHome = false)
    );
    this.hideHomeScreen();
  }

  hideHomeScreen(){
    this.cartService.hideHomeSubject.subscribe((isHide: boolean) => {
      this.hideHome = isHide;
    });
  }
}
