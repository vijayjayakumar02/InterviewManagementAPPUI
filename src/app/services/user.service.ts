import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseCode } from '../enums/responseCode';
import { ResponseModel } from '../Models/responseModel';
import { User } from '../Models/user';
import {map} from 'rxjs/operators'
import { Constants } from '../Constants/constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseURL:string="https://localhost:44382/api/User/";
  constructor(private httpClient: HttpClient) { }

  public login(email:string, password:string)
  {
    const body={
      Email:email,
      Password:password
    }
    return this.httpClient.post<ResponseModel>(this.baseURL+"Login",body);
  }

  public Register(fullname:string,email:string, password:string)
  {
    const body={
      FullName:fullname,
      Email:email,
      Password:password
    }
    return this.httpClient.post<ResponseModel>(this.baseURL+"RegisterUser",body);
  }

  public getAllUser(){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    console.log(userInfo);
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userInfo?.token}`
    });
    return this.httpClient.get<ResponseModel>(this.baseURL+"GetAllUser",{headers:header});
  }
}
