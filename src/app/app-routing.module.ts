import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JobboardComponent } from './jobboard/jobboard.component';
import { CareerComponent } from './career/career.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
 { path: '', component: JobboardComponent },
 { path: 'main', component: MainComponent },
 
 { path: 'jobboard', component: JobboardComponent },
 
 { path: 'career', component: CareerComponent }, 
 { path: 'test', component: TestComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
