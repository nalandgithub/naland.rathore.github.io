import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
  import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import {FormsModule} from '@angular/forms';
import { CareerComponent } from './career/career.component';
import { JobboardComponent } from './jobboard/jobboard.component';
import { TestComponent } from './test/test.component';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    MainComponent,
    CareerComponent,
    JobboardComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
    
  ],
  providers: [UserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
