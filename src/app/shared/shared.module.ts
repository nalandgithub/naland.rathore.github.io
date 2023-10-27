import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourscomponentComponent } from './components/yourscomponent/yourscomponent.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    YourscomponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YourscomponentComponent,HeaderComponent,FooterComponent
  ]
})
export class SharedModule { }
