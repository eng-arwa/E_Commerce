import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';


const routes: Routes = [
  {
    path: '',component:AllProductsComponent,
   
   
  },
  { path: 'details/:id',component:DetailsProductComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
