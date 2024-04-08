import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessageService } from 'src/app/service/alert-message.service';
import {AuthServiceService} from 'src/app/service/auth-service.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private authService:AuthServiceService, private alertMsg:AlertMessageService,
    private router:Router
  ){}

  onSubmit(form:NgForm){
    console.log(form)
    const token =this.authService.authenticationUser(form.value);
    if(token){
      localStorage.setItem('token', token.name)
      this.alertMsg.Success('Login Successfull')
      this.router.navigate(['/'])
    }else{
      this.alertMsg.Failure('Invalid Credential, Login Failed')
    }
  }
}
