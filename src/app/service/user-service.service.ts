import { Injectable } from '@angular/core';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(CurrentUser:user){
    let users:any[]=[];
    const storedUSer = localStorage.getItem('user')
    if(storedUSer){
      users = JSON.parse(storedUSer);
      users = [CurrentUser, ...users];
    }else{
      users=[CurrentUser]
    }
    localStorage.setItem('user', JSON.stringify(users))
  }
}
