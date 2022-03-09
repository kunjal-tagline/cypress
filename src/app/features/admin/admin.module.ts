import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from 'src/app/features/admin/admin-routing.module';
import { AdminDashboardComponent } from 'src/app/features/admin/admin-dashboard/admin-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { AddProductComponent } from 'src/app/features/admin/add-product/add-product.component';
import { ViewProductComponent } from 'src/app/features/admin/view-product/view-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from 'src/app/features/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, CoreModule, ReactiveFormsModule],
})
export class AdminModule {}
