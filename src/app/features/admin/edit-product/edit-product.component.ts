import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'jewellery-shop-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public editProduct!: any;
  public categories: any[] = [
    {
      id: 'ring',
      value: 'ring',
    },
    {
      id: 'earring',
      value: 'earring',
    },
    {
      id: 'necklace',
      value: 'necklace',
    },
    {
      id: 'bracelet',
      value: 'bracelet',
    },
    {
      id: 'anklet',
      value: 'anklet',
    },
  ];

  public editPoductForm: FormGroup = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    returnTime: new FormControl(''),
    imagePath: new FormControl(''),
    category: new FormControl(''),
    productDetail: new FormControl(''),
  });

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    const products: any = localStorage.getItem('productDataToken');
    this.editProduct = JSON.parse(products);
    if (this.editProduct) {
      this.setProductDefaultValue();
    }
  }

  public setProductDefaultValue(): void {
    this.editPoductForm.setValue({
      productName: this.editProduct.productName,
      productPrice: this.editProduct.productPrice,
      returnTime: this.editProduct.returnTime,
      imagePath: this.editProduct.imagePath,
      category: this.editProduct.category,
      productDetail: this.editProduct.productDetail,
    });
  }

  public editProductSubmit(): void {
    const productIdGet = this.editProduct.cartId;
    this.adminService
      .editProductById(productIdGet, this.editPoductForm.value)
      .then((response: any) => {
        this.router.navigate(['/admin/view-product']);
      });
  }
}
