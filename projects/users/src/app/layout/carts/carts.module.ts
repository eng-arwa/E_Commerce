import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartsRoutingModule } from './Cart-routing.module';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CartsModule { }
