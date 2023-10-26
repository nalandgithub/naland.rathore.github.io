import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  userList: string | undefined;
  private saveUsername: boolean = true;
 
  constructor (public service: UserService) {
    //this.service.getData();
  }
  
  
  userForm = new FormGroup({
   name: new FormControl("",[Validators.required]),
   email: new FormControl("",[Validators.required]),
   address: new FormControl("",[Validators.required]),
   city: new FormControl("",[Validators.required]),
  });
  
  
  onSubmit() {
    console.log(this.userForm.value);
    // this.service.addUserData(this.userForm.value);  
    //this.userList = this.service.getUserData();
    console.log(this.userList);
    
   localStorage.setItem('token',JSON.stringify(this.userForm.value));
  // localStorage.getItem('token');
     // sessionStorage.setItem('username','name');
 
  }
  get (){
 //   return sessionStorage.getItem('username');
  }
  removeItem (){
  //  sessionStorage.removeItem('username');
  }
  clearAll(){
   // sessionStorage.clear();
  }
  

ngOninit() {
 // let data = this.service.getUserData();
//  console.log(localStorage.getItem('token'));
 // this.getAll();


// this.userForm.patchValue({
//   name: data.name,
//   email : data.email,
//   address : data.address,
//   city : data.city,
// });
this.getAll();
}
getAll() {
  let value = localStorage.getItem("token");
  if (value != '' && value != null && typeof value != "undefined") {
    this.userList = JSON.parse(value!);
    console.log(localStorage.getItem('token'));

  }
}

}
