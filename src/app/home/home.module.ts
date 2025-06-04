import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    // component can only have one module
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
