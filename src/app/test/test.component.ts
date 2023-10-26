import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
cookiebox : boolean = false;
constructor(private cookie : CookieService) {}
  ngOnInit(){}

  onSubmit() {
    localStorage.setItem('Token','name1');
  console.log(localStorage.getItem('username1'));
    // sessionStorage.setItem('username','name');
  }
  get (){
    return sessionStorage.getItem('username');
  }
  removeItem (){
    sessionStorage.removeItem('username');
  }
  clearAll(){
    sessionStorage.clear();
  }

check(){

}
allow(){
   this.cookie.set('data','value',{expires:1});
 //  this.cookiebox = false;
}
decline(){
  this.cookiebox = false;
}

}
