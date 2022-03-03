import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoBackComponent } from './go-back/go-back.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GoBackComponent
  ]
})
export class CoreModule { }
