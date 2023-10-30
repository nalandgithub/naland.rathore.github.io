import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validLogin: boolean | undefined;
  router: any;
  email: any;
  password:  any ;
  userList: string | undefined;

  // loginObj : any ={
  //   email : '',
  //   password : ''
  // }
  constructor(public service : UserService){

  }
loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  cartCount: any;
  loginStatus: boolean | undefined;

  ngOnInit(){
    // this.service.cartCount.subscribe((c) => {
    //   this.cartCount = this.email;
    // });
    // this.service.isLoggedIn.subscribe((status) => {
    //   this.loginStatus = status;
    // });
    
    //let data = this.service.loginUser();
   // let data = this.service.loginUser(this.email ,this.password);
 
  }

  onLogin() {
    let data = this.loginForm.value;
    console.log(this.loginForm.value);
    this.service.loginUser(this.email,this.password);  
  // this.userList= this.service.loginUser(this.email,this.password);
   //console.log(this.userList);
  }

  // login(form: NgForm) {
  //   const emails = form.value.email;
  //   const passwords = form.value.password;

   // this.authService.loginUser(email,password);   
  // this.service.loginUser(emails,passwords); 


// this.service.loginUser(this.email,this.password).subscribe(
//   (result: any) => {
//     if(result){
//       if(this.email === 'jay' && this.password === 'Jay123'){
//         this.validLogin = true;
//         this.router.navigate(['/career']);
//      }else{
//       this.validLogin = false;
//       console.log('Login Error');
//       }
//   }
// });

 // }
  // onLogin(){
  //   this.userForm.value;
  //   this.service.loginUser(this.email,this.password);
  //   // const isUserExist = this.loginObj.find(this.loginObj.email &&  this.loginObj.password);
  //   // if(isUserExist  != undefined){
  //   //   this.router.navigate(['/career']);
  //   //   alert('user login succesfully');
  //   // }
  //   // else{
  //   //   alert('wrong credentials');
  //   // }
  // }


  // login() {

  //   this.service.loginUser();
  // }
  // logout() {
  //   this.service.logoutUser();
  // }
      // let obj = JSON.parse(data as string);
   // let data =localStorage.getItem('username');
 //  localStorage.setItem('username',JSON.stringify(this.loginForm.value));
    //let obj = JSON.parse(data as string);
  //   this.loginForm.patchValue({
  //    username: obj.username,
  //    password : obj.password
     
  //  });
   //this.service.loginUser();
    // let username = this.loginForm.get('username').value;
    // let password = this.loginForm.get('password').value;
    // let data = this.service.getUserData();
   // this.authenticationService.login(username, password).subscribe(() => this.router.navigateByUrl("/"));
}
