import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent {
userList: string | undefined;
private saveUsername: boolean = true;
checkbox : any ;
genders: any[] = [
  { value: 'Male', title: 'Male' },
  { value: 'Female', title: 'Female' }
];
countryList =["America","China","India","Russia"];
selectedContry:string="India";
constructor (public service: UserService) {
  //this.service.getData();
}


userForm = new FormGroup({
 name: new FormControl("",[Validators.required]),
 email: new FormControl("",[Validators.required]),
 gender: new FormControl("",[Validators.required]),
 country: new FormControl("",[Validators.required]),
 address: new FormControl("",[Validators.required]),
 city: new FormControl("",[Validators.required]),
 checkbox: new FormControl(true,[Validators.required])
});


onSubmit() {
  console.log(this.userForm.value);
  // this.service.addUserData(this.userForm.value);  
  //this.userList = this.service.getUserData();
  console.log(this.userList);
}


onGet() {
  console.log(this.userForm.value);
  this.service.getUserData();  
}

ngOnInit() {  
  //this.countryList =["America","China","India","Russia"];
  let data = this.service.getUserData();

  // this.userForm.controls["name"].setValue(data.name);
  // this.userForm.controls["email"].setValue(data.email);
  // this.userForm.controls["address"].setValue(data.address);
  // this.userForm.controls["city"].setValue(data.city);
 
 this.userForm.patchValue({
  name: data.name,
  email : data.email,
  gender : data.gender,
 country:data.country,
  address : data.address,
  city : data.city,
  checkbox : data.checkbox
});

}
// checkValue(event: any) {
//   this.checkbox.patchValue({
//     checkbox: event.target.checked
//   })
}


// updateData(value: any) {
//   let body = {
//     name: value.name,
//     age: value.age
//   }
// }
 // console.log(this.name+' email -'+this.email+ this.address+ this.city);
  // console.log(this.userForm.value);
  // this.service.getUserData();
// ngOnInit(): void {
//   this.userList = this.service.getData();
// }


// data : any{
//   name:'',
//   email : '',
//   address : '',
//   city : ''
// }
// name = new FormControl<string>('');
// email = new FormControl<string>('');
// address = new FormControl<string>('');
// city = new FormControl<string>('');


// ngOnInit() {
//  this.name.valueChanges.subscribe((value) => {
//    console.log('changed value', value);
//   });
// }

//ngOnInit(): void { }  
//public submit(): void {  
    // if (this.validate()) {  
    //     this.service.addUserData(this.model); 
    // }  
// }  

 //ngOnInit() {  
 //this.service.addUserData(this.name);  
 // }
// }
