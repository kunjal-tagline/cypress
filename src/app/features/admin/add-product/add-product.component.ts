import { AdminService } from './../../../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'jewellery-shop-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public editProduct!: any;
  public categories: any[] = [
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

  public addPoductForm: FormGroup = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    returnTime: new FormControl(''),
    imagePath: new FormControl(''),
    category: new FormControl(''),
    productDetail: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    const products: any = localStorage.getItem('productId');
    this.editProduct = JSON.parse(products);
    // console.log('obj :>> ', obj);
    if(this.editProduct){
      this.setProductValue()
    }
    // console.log(
    //   'localStorage.getItem(productId) :>> ',
    //   localStorage.getItem('productId')
    // );
  }

  ngOnInit(): void {
    this.addPoductForm = this.fb.group({
      productName: ['product1', Validators.required],
      productPrice: ['1234', Validators.required],
      returnTime: ['10', Validators.required],
      imagePath: ['', Validators.required],
      category: ['', Validators.required],
      productDetail: ['', Validators.required],
    });
  }

  /**
   * setProductValue
   */
  public setProductValue() {
    this.addPoductForm.setValue({
      productName: this.editProduct.productName,
      productPrice: this.editProduct.productPrice,
      returnTime: this.editProduct.returnTime,
      imagePath: this.editProduct.imagePath,
      category: this.editProduct.category,
      productDetail: this.editProduct.productDetail,
    });
  }
  public addProductSubmit(): void {
    this.adminService.addProduct(this.addPoductForm.value);
  }
}
