import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  @ViewChild('propName') Name:String='';

  constructor(private router:Router){}

  back(){
    this.router.navigate(['/'])

  }

  onSubmit(Form:NgForm){
    console.log("submit works", Form)
    console.log("name", this.Name)
  }

}
