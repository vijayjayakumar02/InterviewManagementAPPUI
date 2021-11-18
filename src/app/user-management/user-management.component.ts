import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public userList:User[]=[];
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  
  getAllUser(){
    this.service.getAllUser().subscribe((data:any)=>{
      this.userList = data;
      console.log(data);
    })
  }
}
