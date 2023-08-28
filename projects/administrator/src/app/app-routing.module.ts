import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(module => module.LayoutModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  { useHash: false })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
