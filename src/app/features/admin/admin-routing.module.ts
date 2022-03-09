import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/features/admin/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'view-product',
    component: ViewProductComponent,
  },
  {
    path: '**',
    redirectTo: 'admin-dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
