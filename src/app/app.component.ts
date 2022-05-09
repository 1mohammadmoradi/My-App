import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  flage= false;
  //title = 'My-App4';
  // constructor( ) {
     
  // }
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
  
  click(){
    
     this.flage=!this.flage;
     console.log('ssss',this.flage);
     return this.flage;
   }


   /////

 
   constructor(
     private modalService: NgbModal
   ){
     this.modalOptions = {
       backdrop:'static',
       backdropClass:'customBackdrop'
     }
   }
   
   open(content) {
     this.modalService.open(content, this.modalOptions).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
 
   private getDismissReason(reason: any): string {
     if (reason === ModalDismissReasons.ESC) {
       return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       return 'by clicking on a backdrop';
     } else {
       return  `with: ${reason}`;
     }
   }

  
}
