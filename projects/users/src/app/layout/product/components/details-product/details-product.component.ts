import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent {
  id!: any;
  dataProduct!:any
  constructor(private productservices: ProductsService,
  private navigate:ActivatedRoute
  ) {
    this.id = navigate.snapshot.paramMap.get('id');
    this.getProductByid();
    
  }

  getProductByid() {

    this.productservices.getProductByid(this.id).subscribe((res: any) => {
      console.log(res)
      this.dataProduct=res
    })
    
  }

}
