import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() childProperty :any;
  childProperty2 ='lk'
  flage=true;
  title = 'My-App4';
  constructor( ) {
     
  }
  click(){
    
     this.flage=!this.flage;
     console.log('ssss',this.flage);
     return this.flage;
   }
  
}
