import { Component } from '@angular/core';
import { Router } from '@angular/router';
export type EditorType = 'Dashboard' | 'User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  private isButtonVisible = true;
  editor: EditorType = 'Dashboard';
  
  form: any;
  buttonType: any;

}

