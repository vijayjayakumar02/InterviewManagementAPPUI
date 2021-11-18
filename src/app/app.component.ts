import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './Constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterviewManagementAppUI';
  constructor(private router:Router){}
  onLogout(){
      localStorage.removeItem(Constants.USER_KEY);
  }
  get isUserLoggedIn(){
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }
}