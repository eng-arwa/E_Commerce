import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { SheredModule } from '../../shered/shered.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule,
    SheredModule,
    FormsModule
    
  ]
})
export class ProductModule { }
