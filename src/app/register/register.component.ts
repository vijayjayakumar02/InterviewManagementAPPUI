import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public RegisterForm=this.formBuilder.group({
    fullname:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  
  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit");
    let fullname = this.RegisterForm.controls["fullname"].value;
    let email = this.RegisterForm.controls["email"].value;
    let password = this.RegisterForm.controls["password"].value;
    this.userService.Register(fullname,email,password).subscribe((data)=>{
      console.log("response",data);
    },error=>{
      console.log("error",error)
    })
  }
}
