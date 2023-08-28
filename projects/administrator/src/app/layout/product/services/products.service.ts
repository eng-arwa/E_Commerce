import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/users/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getallProducts(filter?: any) {
    if (filter) {
      
      return this.http.get(environment.baseurl + `products/category/${filter}`);
    }
    else {
      return this.http.get(environment.baseurl + 'products');

    }
  }
  getallCategory() {
    
    return this.http.get(environment.baseurl + 'products/categories');
  }
  getProductByid(id:any) {
    return this.http.get(environment.baseurl + 'products/'+id);

  }
}
