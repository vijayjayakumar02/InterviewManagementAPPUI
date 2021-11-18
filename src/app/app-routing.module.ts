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
  {path:"register",component:RegisterComponent},
  {path:"user-management",component:UserManagementComponent, canActivate:[AuthService]},
  {path:"interview-management",component:SidenavComponent},
  {path:"idashboard",component:InterviewerDashboardComponent},
  {path:"application",component:ApplicationComponent},
  {path:"iform",component:InterviewFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
