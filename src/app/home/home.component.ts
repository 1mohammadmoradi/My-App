import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  flage =true;

  constructor() { }

ngOnInit(): void {
  console.log('flage',this.flage);
}
  
  headers = ['Id','FirstName','LastName','City'];
  rows = [
  {Id : "1" , FirstName :"Mohammad" , LastName : "Moradi" , City : "Sisakht" } ,
  {Id : "2" , FirstName :"Liana" , LastName : "Moradi" , City : "Tehran" },
  {Id : "3" , FirstName :"Delsa" , LastName : "Salehi" , City : "Sisakht" },
  {Id : "4" , FirstName :"Ali" , LastName : "Salehi" , City : "Tehran" },


]

ngAfterInit() : void {


  console.log('flage',this.flage);
}

}
