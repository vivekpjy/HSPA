import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authenticationUser(user:any){
    let userArray = [];
    if(localStorage.getItem('user')){
      const userjson = localStorage.getItem('user')
      if(userjson !== null){
        userArray = JSON.parse(userjson)
      }
      return userArray.find((usr:any) => usr.name === user.name && usr.password === user.password) 
    }
  }
}
