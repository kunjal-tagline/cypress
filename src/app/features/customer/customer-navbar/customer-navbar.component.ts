import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss'],
})
export class CustomerNavbarComponent implements OnInit {
  public navbarList: any = [
    {
      id: 'All jewellery',
      value: 'All jewellery',
    },
    {
      id: 'Ring',
      value: 'Ring',
    },
    {
      id: 'Earing',
      value: 'Earing',
    },
    {
      id: 'Nacklace',
      value: 'Nacklace',
    },
    {
      id: 'Bracelet',
      value: 'Bracelet',
    },
    {
      id: 'Anklet',
      value: 'Anklet',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
