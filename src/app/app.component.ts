import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  roomNumber=1;
  Adult=1;
  Child=0;

  roomSubDisable=true;
  roomAddDisable=false;

  AdultSubDisable=true;
  AdultAddDisable=false;

  ChildSubDisable=true;
  ChildAddDisable=false;

common(){
  if(this.roomNumber==5){
    this.roomAddDisable=true
  }
  if(this.roomNumber==1){
    this.roomSubDisable=true
  }
  if(this.roomNumber>1){
    this.roomSubDisable=false;
  }
  if(this.roomNumber<5){
    this.roomAddDisable=false;
  }
  if(this.Adult>1){
    this.AdultSubDisable=false
  }
  if(this.Adult==1){
    this.AdultSubDisable=true;
  }
  if(this.Child<20){
    this.ChildAddDisable=false
  }
  if(this.Adult<20){
    this.AdultAddDisable=false;
    this.ChildAddDisable=false;
  }
 
 if(this.Child>0){
    this.ChildSubDisable=false
  }
  if(this.Child==0){
    this.ChildSubDisable=true;
  }

  if(this.Adult+this.Child==20){
    this.AdultAddDisable=true;
    this.ChildAddDisable=true
  }

}

  RoomAdd(){
    this.roomNumber=this.roomNumber+1;
   this.common()
    if(this.roomNumber>this.Adult+this.Child){
      this.Adult=this.Adult+1;
    }
   
  }

  RoomSub(){
    this.roomNumber=this.roomNumber-1;
   this.common()
    if((this.Adult+this.Child)>this.roomNumber*4){
      console.log("reach")
      this.Child=0
      this.Adult=this.roomNumber*4;
    }
    this.common()
  }

  AdultAdd(){
   
    this.Adult=this.Adult+1
    this.common()
  if(this.Adult+this.Child>4*this.roomNumber){
      this.roomNumber=this.roomNumber+1;
    }


  }
  AdultSub(){
    this.Adult=this.Adult-1;
    console.log(this.Adult)
    this.common()
    if((this.Adult+this.Child)<this.roomNumber){
      console.log(this.Adult+" "+this.Child+" "+this.roomNumber)
      this.roomNumber=this.roomNumber-1;
      console.log(this.Adult+" "+this.Child+" "+this.roomNumber)
    }
    this.common()
  }

  ChildAdd(){
    this.Child=this.Child+1
   this.common()
  
    if(this.Adult+this.Child>this.roomNumber*4){
      this.roomNumber=this.roomNumber+1;
    }

  }
  ChildSub(){
this.Child=this.Child-1;
this.common()
if((this.Adult+this.Child)<this.roomNumber){
  console.log(this.Adult+" "+this.Child+" "+this.roomNumber)
  this.roomNumber=this.roomNumber-1;
  console.log(this.Adult+" "+this.Child+" "+this.roomNumber)
}
this.common()
  }

}

