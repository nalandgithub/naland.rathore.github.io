import { Injectable } from '@angular/core';


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
    country : 'America',
    address : 'Ahemdabad',
    city : 'Ahemdabad',
    checkbox : true
  }

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