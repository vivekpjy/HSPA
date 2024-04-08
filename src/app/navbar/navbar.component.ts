import { Component } from '@angular/core';
import { AlertMessageService } from '../service/alert-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userName:any;

  constructor(private alertMSg:AlertMessageService,private router:Router){}

  LoggedIn(){
    this.userName = localStorage.getItem('token');
    return localStorage.getItem('token')
  }

  Logout(){
    localStorage.removeItem('token')
    this.alertMSg.Success("Logout Successfully");
    this.router.navigate(['/user/user-login'])

  }
}
