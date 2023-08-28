import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SelectComponent
  ]

})
export class SheredModule { }
