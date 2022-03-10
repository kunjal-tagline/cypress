import { AdminService } from './../../../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
})
export class ShowProductsComponent implements OnInit {
  public allJewelleryData: any = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.allJewelleryDataGet();
  }

  public allJewelleryDataGet(): void {
    this.adminService.getProductList().then((response: any) => {
      this.allJewelleryData = response;
    });
  }
}
