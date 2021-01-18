import { Component, Input, Output, EventEmitter } from '@angular/core';
import { without } from 'lodash';

@Component({
  selector: 'app-cuisine-search',
  templateUrl: './cuisine-search.component.html',
  styleUrls: ['./cuisine-search.component.css']
})
export class CuisineSearchComponent {


  @Input() cuisineList;
  @Output() filterCuisineEvt = new EventEmitter();

  filterCuisine(theCuisine: object){

    this.filterCuisineEvt.emit(theCuisine);
 }




}
