import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  headers = ['Id','FirstName','LastName','City'];
  rows = [{Id : "1" , FirstName :"Mohammad" , LastName : "Moradi" , City : "Sisakht" } ,
  {Id : "2" , FirstName :"Ali" , LastName : "Hekmati" , City : "Shahreza" }


]
}
