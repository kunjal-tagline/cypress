import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
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

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.addPoductForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      returnTime: ['', Validators.required],
      imagePath: ['', Validators.required],
      category: ['', Validators.required],
      productDetail: ['', Validators.required],
    });
  }

  public addProductSubmit(): void {
    this.adminService
      .addProduct(this.addPoductForm.value)
      .then((response: any) => {
        this.router.navigate(['/admin/view-product']);
      });
  }
}
