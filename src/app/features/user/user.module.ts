import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from 'src/app/features/user/user-routing.module';
import { LoginComponent } from 'src/app/features/user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule,ReactiveFormsModule],
})
export class UserModule {}
