import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;
  baseURL: any;
  messages: any;
  data : any; 
   user = {
    name:'adsasdasdsads',
    email : 'harsh@gmail.com',
    gender : 'Male',
    country : 'India',
    address : 'Ahemdabad',
    city : 'Ahemdabad',
    checkbox : true
  }
  token: string | undefined;
  router: any;
  //fakeUsername: string = "username";
 // fakePassword: string = "password";
  cartCount: any;

  addUserData(model: any) {
    throw new Error('Method not implemented.');
  }

  getUserData() {
    // let abc="Harsh";
    // return abc;
    return this.user;
  }
  deleteUserData() {
    return this.user;
  }
  ngOnInit(){
    //localStorage.setItem('token','http://localhost:4200/jobboard');
  }

  public saveData(key: string, value: string) {
  //  localStorage.setItem(key, value);
  }

  // public getData(key: string) {
  //   return localStorage.getItem(key)
  // }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
 // isLoggedIn = new BehaviorSubject(false);

  // loginUser() {
  //   this.isLoggedIn.next(true);
  // }
  // logoutUser() {
  //   this.isLoggedIn.next(false);
  // }
 

   //login(username: string, password: string): Observable<any> {
 
  //   if (username == this.fakeUsername && password == this.fakePassword) {
  //     localStorage.setItem("token", "my-super");
  //     //return of(new HttpResponse({ status: 200 }));
  //   } else {
  //    // return of(new HttpResponse({ status: 401 }));
  //   }
  // }
  loginUser(email: string,password: string) {
    debugger;
   // return this.http.setItem(email, password);
    return this.http.get(email,password);
   // return 'Login Successful';
  }

 
  // loginUser(){
  //   return this.http.post(this.user);

  // }



  //   private userList: user[] = [{
//     id: 1,
//     name: 'Ankit ',
//     email: 'ankit@gmail.com',
//     address: 'Ahemdabad',
//     city: 'Ahemdabad'
// }];

  //  data : any{
  //     name:'',
  //     email : '',
  //     address : '',
  //     city : ''
  //   }


//   updateData() {
//     let name = "Shyam";
    
//     return name;
// }
// updateUser(user: User) {
//   const userIndex = this.userList.findIndex(x => x.id == user.id);
//   if (userIndex != null && userIndex != undefined) {
//       this.userList[userIndex] = user;
//   }
// }

// clear() {
//   this.messages = [ ];
// }
  // getUserData(): any[] {
  //   throw new Error('Method not implemented.');
  // }
   
  // private userData: UserData[] = [
  //   { title: 'harsh' },
  //   { title: 'harsh@gmail.com' },
  //   { title: 'Ahemdabad' },
  //   { title: 'Ahemdabad' },
  // ];

  // getUserList() {
  //   return this.userData;
  // }

  // userData: UserData[] = [
  //   { title: 'harsh' },
  //   { title: 'harsh@gmail.com' },
  //   { title: 'Ahemdabad' },
  //   { title: 'Ahemdabad' },
  // ];
}

