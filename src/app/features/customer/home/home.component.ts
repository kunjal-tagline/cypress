import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'jewellery-shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isDisplayHome = false;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.selectedCategory$.subscribe(
      (selectedCategory: string) =>
        selectedCategory === 'home'
          ? (this.isDisplayHome = true)
          : (this.isDisplayHome = false)
    );
  }
}
