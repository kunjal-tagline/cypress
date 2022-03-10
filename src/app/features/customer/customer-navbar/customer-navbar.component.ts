import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'jewellery-shop-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss'],
})
export class CustomerNavbarComponent implements OnInit {
  public navbarList: any = [
    {
      id: 'home',
      value: 'Home',
      redirectTo: '/customer',
    },
    {
      id: 'allJewellery',
      value: 'All jewellery',
      redirectTo: '/customer/show-products',
    },
    {
      id: 'ring',
      value: 'Ring',
      redirectTo: '/customer/show-products',
    },

    {
      id: 'earring',
      value: 'Earring',
      redirectTo: '/customer/show-products',
    },
    {
      id: 'necklace',
      value: 'Necklace',
      redirectTo: '/customer/show-products',
    },
    {
      id: 'bracelet',
      value: 'Bracelet',
      redirectTo: '/customer/show-products',
    },
    {
      id: 'anklet',
      value: 'Anklet',
      redirectTo: '/customer/show-products',
    },
  ];

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  /**
   * navigateTo
   */
  public navigateTo(selectedCategory: string, navigateUrl: string) {
    this.customerService.selectedCategory$.next(selectedCategory);
    this.router.navigate([navigateUrl]);
  }
}
