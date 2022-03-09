import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jewellery-shop-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  public viewProductList: any = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.productListshow();
  }

  public productListshow(): void {
    this.adminService.getProductList().then((response: any) => {
      this.viewProductList = response;
    });
  }

  public deleteProduct(id: string): void {
    this.adminService.removeProductById(id);
    this.productListshow();
  }

  public editProduct(productDetails: any): void {
    localStorage.setItem('productDataToken', JSON.stringify(productDetails));
    const id = productDetails.cartId;
    this.router.navigate(['/admin/edit-product', id]);
  }
}
