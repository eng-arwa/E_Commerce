import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },


];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  Total!: number;
  mode: any="determinate";
  constructor(private cartservices: CartService,
  private toastr:ToastrService
  ) {
    this.getdatacart();

  }
  displayedColumns: any[] = ["Name", "Price", "Quantity", "Total", " "];
  dataSource!: any[];
  getdatacart() {
    if (localStorage.getItem("cart")) {

      this.dataSource = JSON.parse(localStorage.getItem("cart")!);
      this.totalPrice();
    }
  }
  minQuantity(index: any) {
    this.dataSource[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.dataSource));
    this.totalPrice();


  }
  plusQuantity(index: any) {
    this.dataSource[index].quantity++

    localStorage.setItem("cart", JSON.stringify(this.dataSource))
    this.totalPrice();
  }

  totalPrice() {
    this.Total = 0
    for (let product in this.dataSource) {

      this.Total += this.dataSource[product].item.price * this.dataSource[product].quantity
      console.log(this.Total)

    }
  }
  quantity(index: any) {


    localStorage.setItem("cart", JSON.stringify(this.dataSource))
    this.totalPrice();
  }

  deleteprocart(index: any) {
    this.dataSource.splice(index, 1)
    this.totalPrice();
    localStorage.setItem("cart", JSON.stringify(this.dataSource));
    this.getdatacart()

  }
  Clear() {

    localStorage.clear();
    this.dataSource = []
    this.getdatacart()
    this.totalPrice()
  }

  oreder() {
    let product = this.dataSource.map(item => {
      return {
        productId: item.item.id,
        quantity: item.quantity

      }
    })
    let model = {
      userId: 1,
      date: new Date(),

      products: product
    }
    this.mode="indeterminate"

    this.cartservices.oredercart(model).subscribe(res => {
      this.toastr.success("your order sent");
      this.mode="determinate"
    })
  }

}
