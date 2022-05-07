
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {
  @Input() item :any;
  result;
  constructor() {
    
     
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('oo', this.item);
    this.result = this.item
  }
  
  
  
  ngOnInit() {
    //this.result = this.item
    console.log('oo', this.item);
  }
  
  
  headers = ['Id','FirstName','LastName','City'];
  rows = [
  {Id : "1" , FirstName :"Mohammad" , LastName : "Moradi" , City : "Sisakht" } ,
  {Id : "2" , FirstName :"Liana" , LastName : "Moradi" , City : "Tehran" },
  {Id : "3" , FirstName :"Delsa" , LastName : "Salehi" , City : "Sisakht" },
  {Id : "4" , FirstName :"Ali" , LastName : "Salehi" , City : "Tehran" },


]


}
