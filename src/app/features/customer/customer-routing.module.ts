import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/features/customer/home/home.component';
import { ShowProductsComponent } from 'src/app/features/customer/show-products/show-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from 'src/app/features/customer/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'show-products',
        component: ShowProductsComponent,
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
      },
      {
        path: 'cart-products',
        component: CartComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
