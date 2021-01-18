import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  showForm: boolean;


  @Input() purchaseForm;
  @Input() orderInformation;
  @Input() total;
  @Input() customerInfo;



  constructor() {

}

  ngOnInit(): void {
  }

}
