import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { InterviewFormComponent } from './interview-form/interview-form.component';
import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent, canActivate:[AuthService]},
  {path:"user-management",component:UserManagementComponent, canActivate:[AuthService]},
  {path:"interview-management",component:SidenavComponent, canActivate:[AuthService]},
  {path:"idashboard",component:InterviewerDashboardComponent, canActivate:[AuthService]},
  {path:"application",component:ApplicationComponent, canActivate:[AuthService]},
  {path:"iform",component:InterviewFormComponent,  canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
