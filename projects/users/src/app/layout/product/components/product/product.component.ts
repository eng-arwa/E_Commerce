import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() dataProducts: any;
  @Output() CartItem = new EventEmitter();
  mount: number=1;
  addButton: boolean= false;

  add(item: any) {
   
    this.CartItem.emit({item:this.dataProducts,quantity:this.mount});
  }
}
