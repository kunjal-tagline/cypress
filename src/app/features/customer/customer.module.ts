import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from 'src/app/features/customer/customer-routing.module';
import { HomeComponent } from 'src/app/features/customer/home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { CustomerNavbarComponent } from 'src/app/features/customer/customer-navbar/customer-navbar.component';
import { ShowProductsComponent } from 'src/app/features/customer/show-products/show-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [HomeComponent, CustomerNavbarComponent, ShowProductsComponent, ProductDetailsComponent],
  imports: [CommonModule, CustomerRoutingModule, CoreModule],
})
export class CustomerModule {}
