import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css']
})
export class YourOrderComponent implements OnInit {
  deliveryPressed: boolean;
  CollectionPressed: boolean;
  ingageCheckOut: boolean;
  @Input() listOfItemsBought;
  @Input() totalCost;
  @Input() basketIsEmpty;

  @Output() deliveryEvt = new EventEmitter();
  @Output() collectEvt = new EventEmitter();
  @Output() orderInfoEvt = new EventEmitter();
  @Output() deleteItemEvt = new EventEmitter();

  popUpBox(){
    alert("If you have a food allergy or intolerance (or someone you’re ordering for has), please phone the restaurant on 555 5555.");
  }

  deleteItem(item: object){
    this.deleteItemEvt.emit(item);
  }

  goToComponentB(): void {
        this.router.navigate(['/checkout'], {state: {data: this.listOfItemsBought}});
    }

  deliveryClick(){
    if(this.totalCost > 0){
    this.deliveryEvt.emit();
    this.deliveryPressed = true;
    this.CollectionPressed = false;
    this.ingageCheckOut = true;
  }

  }

  collectClick(){
    if(this.totalCost > 0){
    this.collectEvt.emit();
    this.deliveryPressed = false;
    this.CollectionPressed = true;
    this.ingageCheckOut = true;
  }
  }

  constructor(private router: Router) {

    this.deliveryPressed = false;
    this.CollectionPressed = false;
    this.ingageCheckOut = false;
  }

  ngOnInit(): void {

  }

}
