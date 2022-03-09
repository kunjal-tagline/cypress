import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [AdminDashboardComponent, AddProductComponent, ViewProductComponent, EditProductComponent],
  imports: [CommonModule, AdminRoutingModule, CoreModule,ReactiveFormsModule],
})
export class AdminModule {}
