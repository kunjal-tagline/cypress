import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from 'src/app/features/user/user-routing.module';
import { LoginComponent } from 'src/app/features/user/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
