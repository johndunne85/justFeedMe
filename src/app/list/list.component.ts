import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { without } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  theList;
  modifiedList;
  lastCuisineChoice: string;
  cuisineArray = [];

  filterList(theCuisine: string){
  if(this.cuisineArray.includes(theCuisine)){
    this.modifiedList = this.modifiedList.filter(item => !item.cuisines.includes(theCuisine))
    let n = this.cuisineArray.indexOf(theCuisine);
    this.cuisineArray.splice(n,1);
    }else{
    this.cuisineArray.push(theCuisine);
    this.modifiedList = this.theList.filter(item => this.cuisineArray.includes(item.cuisines))
    }
    if(this.cuisineArray.length === 0){
      this.modifiedList = this.theList;
      }

  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void{
  this.http.get<Object[]>('../assets/data.json').subscribe(data =>{
    this.theList = data;
    this.modifiedList = data;
  });



  }

}
