import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from 'src/app/features/customer/customer-routing.module';
import { HomeComponent } from 'src/app/features/customer/home/home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CustomerRoutingModule,CoreModule],
})
export class CustomerModule {}
