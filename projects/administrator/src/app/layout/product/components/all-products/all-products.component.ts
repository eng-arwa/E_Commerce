import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  dataProducts: any = [];
  category: any;
  cartitemList:any[]=[]
  constructor(private productservices: ProductsService,
  private toastr:ToastrService
  ) {
    
  }
  ngOnInit(): void {
    this.getallproducts();
    this.getallCategory();
  }

  getallproducts(filter?: any) {
    if (filter) {
      this.productservices.getallProducts(filter).subscribe((res:any) => {
        this.dataProducts=res
        // console.log(res)
      })
    }
    else {
      this.productservices.getallProducts().subscribe((res:any) => {
        this.dataProducts=res
        // console.log(res)
      })
    }
    
    
  }
  getallCategory() {
   
    
    this.productservices.getallCategory().subscribe((res:any) => {
      this.category=res
      console.log(res)
      
    })
  }
  filterByCategory(event: any) {
    if (event.value == "all") {
      this.getallproducts()
    }
    else {
      this.getallproducts(event.value)
    console.log(event.value)
    }
    
  }
  addtoCart(event: any) {
    if (localStorage.getItem("cart")) { 
      this.cartitemList = JSON.parse(localStorage.getItem("cart")!);
      let exits = this.cartitemList.find(item => item.item.id == event.item.id);
      // let index=this.cartitemList.findIndex(event.item)
      console.log(exits)
      

      if (exits !== undefined) {
       this.toastr.show("this product already exists")
        
      }
      else {
        this.cartitemList.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartitemList))
      }

    }
    else { 
      this.cartitemList.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartitemList))
    }
   
    
  }
}
