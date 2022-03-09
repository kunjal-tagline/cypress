import { AdminService } from './../../../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  public viewProductList: any = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.productListshow();
  }

  /**
   * productListshow
   */
  public productListshow(): void {
    this.adminService.getProductList().then((res) => {
      this.viewProductList = res;
    });
  }
  /**
   * deleteProduct
   */
  public deleteProduct(id: string): void {
    this.adminService.removeproductById(id);
  }

  /**
   * editProduct
   */
  public editProduct(id:string):void {
    
  }
}
