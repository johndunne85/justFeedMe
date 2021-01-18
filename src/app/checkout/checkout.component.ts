import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  data;
  showForm: boolean;
  showFormPurchase: boolean;
  totalPrice;
  tempAddress;
  cleanForm: boolean;


  handleForm(formInfo: any){
    this.tempAddress = formInfo;
    this.showForm = !this.showForm;
  }

  toggleForm(){
    this.showFormPurchase = !this.showFormPurchase;
    const reducer = (a, b) => a + b[1];
    this.totalPrice = this.data.reduce(reducer,0);
  }

  constructor() {
    this.tempAddress = {
      name:"",
      address1: "",
      address2: "",
      county: "",
      mobile: 0,
      note: ""
    };
    this.cleanForm = false;
    this.showForm = false;
    this.showFormPurchase = true;
   }

  ngOnInit(): void {
    this.data = history.state.data;
  }

}
