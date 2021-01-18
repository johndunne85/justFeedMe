import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  theList2: any[];
  listing;
  modifiedList;
  itemsBoughtArray;
  basketEmpty: boolean;
  totalPrice: number;
  deliveryFlag: boolean;
  collectionFlag: boolean;


  deleteThisItem(item){
   const n = this.itemsBoughtArray.indexOf(item);
   this.totalPrice -= item[1];
   this.itemsBoughtArray.splice(n,1);
  if(this.itemsBoughtArray.length === 1 && this.itemsBoughtArray[0][0] === 'Delivery'){
    this.itemsBoughtArray.pop();
    this.totalPrice -= 4;
    this.basketEmpty = true;
    this.deliveryFlag = true;
    this.collectionFlag = true;
  }
   if(this.itemsBoughtArray.length === 0){
     this.totalPrice = 0;
     this.basketEmpty = true;
   }
  }

  addCollect(){
    if(!this.deliveryFlag){
      this.itemsBoughtArray = this.itemsBoughtArray.filter(eachItem =>{
       return (
         !eachItem[0].includes('Delivery')
       );

     });
     const reducer = (a, b) => a + b[1];
     this.totalPrice = this.itemsBoughtArray.reduce(reducer,0);
   }

    this.deliveryFlag = true;
    this.collectionFlag = true;
  }

  addDelivery(){
    if(this.totalPrice > 0 && this.deliveryFlag){
    this.itemsBoughtArray.push(['Delivery',4]);
    const reducer = (a, b) => a + b[1];
    this.totalPrice = this.itemsBoughtArray.reduce(reducer,0);
  }
  this.deliveryFlag = false;
  this.collectionFlag = false;
  }

  addToCart(thePrice){
    this.itemsBoughtArray.push(thePrice);
    const reducer = (a, b) => a + b[1];
    this.totalPrice = this.itemsBoughtArray.reduce(reducer,0);
    this.basketEmpty = false;
  }


  searchApt(theQuery: string){
    this.modifiedList = this.listing.filter(eachItem =>{
     return (
       eachItem[0].toLowerCase().includes(theQuery.toLowerCase())
     );

   });

 }

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { this.itemsBoughtArray= [];
    this.totalPrice = 0;
    this.deliveryFlag = true;
    this.collectionFlag = true;
    this.basketEmpty = true;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.http.get<Object[]>('../assets/data.json').subscribe(data =>{
      this.theList2 = data;
      this.listing = this.theList2.find(listing => listing.id === id);
      this.listing = this.listing.categories;
      this.modifiedList = this.listing;
    });
  }




}
