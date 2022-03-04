import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('src/app/features/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: '**',
    redirectTo: 'customer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
