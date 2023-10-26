import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditorType } from '../app.component';

@Component({
  selector: 'app-jobboard',
  templateUrl: './jobboard.component.html',
  styleUrls: ['./jobboard.component.css']
})
export class JobboardComponent {
  private isButtonVisible = true;
  editor: EditorType = 'Career';
  title = 'WorkDay UnOfficial';
  form: any;
  buttonType: any;
  constructor(private router: Router) { }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
  ngOninit(): void {
    localStorage.setItem('username','http://localhost:4200/jobboard');
    console.log(localStorage.getItem('username'));
    localStorage.removeItem('username');
  }

  btnClick() {
    this.router.navigateByUrl('/career')
  }
}
