import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { layoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    layoutRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LayoutModule { }
