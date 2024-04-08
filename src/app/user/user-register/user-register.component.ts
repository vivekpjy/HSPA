import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import { UserServiceService } from 'src/app/service/user-service.service';
import {user}  from '../../model/user';
import {AlertMessageService} from 'src/app/service/alert-message.service'


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  RegisterForm!:FormGroup;
  CurrentUser!:user;
  userSubmited:boolean=false;
  constructor(private fb:FormBuilder, private userService:UserServiceService, private alertMsg:AlertMessageService){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.RegisterForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      ConfirmPWD:['',[Validators.required]],
      mobile:['',[Validators.required]]
    },
    {
      validator: this.passwordMatchValidator
    })
  }



  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('ConfirmPWD');
    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  displayError(control:any){
    let field = this.RegisterForm.get(control)
    if(field?.invalid && (field?.touched || field?.dirty) || this.userSubmited){
      return 'This Field Required'
    }else{
      return ''
    }
  }

 
  OnSubmit(){
    this.userSubmited=true;
    if(this.RegisterForm.valid){
      // this.CurrentUser = Object.assign(this.CurrentUser, this.RegisterForm.value)
      this.userService.addUser(this.userData())
      this.RegisterForm.reset();
      this.userSubmited=false;
      this.alertMsg.Success("Congrats,you are successfully registered")
    }else{
      this.alertMsg.Failure("kindly provide required fields")
    }
  }

  userData():user{
    return this.CurrentUser ={
      name: this.Username.value,
      email: this.email.value,
      password: this.password.value,
      ConfirmPWD: this.confirmPWD.value,
      mobile:this.mobile.value 
    }
  }

  get Username(){
    return this.RegisterForm.get('name') as FormControl
  }
  get email(){
    return this.RegisterForm.get('email') as FormControl
  }
  get password(){
    return this.RegisterForm.get('password') as FormControl
  }
  get confirmPWD(){
    return this.RegisterForm.get('ConfirmPWD') as FormControl
  }
  get mobile(){
    return this.RegisterForm.get('mobile') as FormControl
  }



}
