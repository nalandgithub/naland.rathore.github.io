import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditorType } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  private isButtonVisible = true;
  editor: EditorType = 'Dashboard';
  title = 'SampleWebApp';
  form: any;
  buttonType: any;
  constructor(private router: Router) { }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
btnClick() {
  this.router.navigateByUrl('/dashboard')

}
btnClick1(){
  this.router.navigateByUrl('/user')
}

}
