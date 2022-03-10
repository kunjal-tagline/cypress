import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'jewellery-shop-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss'],
})
export class ShowProductsComponent implements OnInit {
  public allJewelleryData: any = [];
  public filterJewelleryData: any = [];
  public selectedCategory = '';

  constructor(
    private adminService: AdminService, 
    private router: Router,
    private customerService: CustomerService
    ) {}

  ngOnInit(): void {
    this.getAllJewellery();
    this.changeSelectedCategory();
  }

  /**
   * changeSelectedCategory
   */
  public changeSelectedCategory() {
    this.customerService.selectedCategory$.subscribe((selectedCategory:string) => {
      this.selectedCategory = selectedCategory;
     if(selectedCategory === 'allJewellery') {
      this.filterJewelleryData = this.allJewelleryData;
     } else {
       this.filterJewelleryData = this.allJewelleryData.filter((product:any)=> product.category === selectedCategory);
     }
    });    
  }

  public getAllJewellery(): void {
    this.adminService.getProductList().then((productList: any) => {
      this.allJewelleryData = productList;
    this.changeSelectedCategory();
    });
  }

  public viewProductDetails(jewelleryItem: any): void {
    localStorage.setItem('productDetailsById', JSON.stringify(jewelleryItem));
    this.router.navigate(['customer/product-details']);
  }
}
