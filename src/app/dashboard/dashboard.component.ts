import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //no: string[];
  //name: string[];
  //email: string[];
  //address: string[];
  //city: string[];
  //listObject:[]=[];
  
  //constructor() {
    //this.no = ["1","2","3","4"];
    //this.name = ["Harsh","Akash","Shyam","Ram"];
    //this.email = ["harsh@gmail.com","akash@gmail.com","shyam@gmail.com","ram@gmail.com"];
    //this.address = ["Shyamal","Indore","Redio Road","Rajkot"];
    //this.city = ["Ahemdabad","Indore","Ahemdabad","Rajkot"];

    
listOfObjects = [{name: "John", email: "john@gmail.com",address: "Ahemdabad",city:"Ahemdabad"},
                 {name: "Ram", email: "ram@gmail.com",address: "Indore",city:"Indore"},
                 {name: "Shyam", email: "shyam@gmail.com",address: "Rajkoat",city:"Rajkot"},
                 {name: "Harsh", email: "harsh@gmail.com",address: "Ahemdabad",city:"Ahemdabad"} 
                ]; 
 
//var array = listOfObjects.map(function(obj) { 
  //return obj.name; 
//}); 
 // }
}

