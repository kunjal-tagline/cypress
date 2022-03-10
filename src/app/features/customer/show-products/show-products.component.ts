import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
})
export class ShowProductsComponent implements OnInit {
  public allJewelleryData: any = [];
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.allJewelleryDataGet();
  }

  public allJewelleryDataGet(): void {
    this.adminService.getProductList().then((response: any) => {
      this.allJewelleryData = response;
    });
  }

  public viewProductDetails(jewelleryItem: any): void {
    localStorage.setItem('productDetailsById', JSON.stringify(jewelleryItem));
    this.router.navigate(['customer/product-details']);
  }
}
