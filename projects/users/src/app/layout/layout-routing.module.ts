import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'products',
      loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      },
      {path:'cart',
      loadChildren: () => import('./carts/carts.module').then(module => module.CartsModule)
      }
    ]
   
        
      
   
   
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes )],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class layoutRoutingModule { }
