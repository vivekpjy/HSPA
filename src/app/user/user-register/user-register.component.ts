import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  RegisterForm!:FormGroup;
  constructor(private fb:FormBuilder){}

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
    if(field?.invalid && (field?.touched || field?.dirty)){
      return 'This Field Required'
    }else{
      return ''
    }
  }

  OnSubmit(){
    console.log(this.RegisterForm)
  }

}
