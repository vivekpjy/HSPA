import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ipropertyBase } from 'src/app/model/ipopertyBase';
import { Property } from 'src/app/model/property';
import { AlertMessageService } from 'src/app/service/alert-message.service';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit{

  // @ViewChild('propName') Name:String='';
  @ViewChild('staticTabs', { static: false }) staticTabs!: TabsetComponent;

  addPropertyForm!:FormGroup;
  nextClicked:boolean=false;

  activeTabId: number = 0;
 propertyTypes:Array<string>=['House','Apartment','Duplex'];
 furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];
 grantedCommunity:Array<string>=['Yes','No'];
 direction:Array<string>=['East','West','South','North'];

 property = new Property();

 propertyView:ipropertyBase={
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  PType: null,
  FType:null,
  BHK:null,
  builtArea:null,
  City:null,
  RTM:null

 
 }
 

  constructor(private fb:FormBuilder, private router:Router, private service:HousingService,
    private alertify:AlertMessageService
  ){}


  ngOnInit(): void {
    this.createForm()
  }

  // selectTab(tabId: number) {
  //   this.staticTabs.tabs[tabId].active = true;
  // }
  selectTab(tabId: number,currentTab?:boolean) {
    console.log(this.addPropertyForm)
    this.nextClicked=true;
    if(currentTab){
      this.staticTabs.tabs[tabId].active = true;
      this.activeTabId = tabId; // Update active tab
    }
    
    
  }

  backTab() {
    // Navigate to the previous tab
    if (this.activeTabId > 0) {
      this.selectTab(this.activeTabId - 1);
    }
  }

  createForm(){
    this.addPropertyForm = this.fb.group({
      BasicInfo:this.fb.group({
        SellRent:[null,Validators.required],
        BHK:[null,Validators.required],
        PType:[null,Validators.required],
        FType:[null,Validators.required],
        Name:[null,Validators.required],
        City:[null,Validators.required],
      }),
      PriceInfo:this.fb.group({
        Price:[null,Validators.required],
        Security:[null],
        Maintenance:[null],
        builtArea:[null],
        CarpetArea:[null],
      }),
      Address:this.fb.group({
        Floor:[null,Validators.required],
        TotFloor:[null],
        address:[null],
        Landmark:[null],
      }),
      OtherDetails:this.fb.group({
        RTM: [null, Validators.required], // Ready to Move
        Datepicker: [null], // Datepicker
        AgeOfProperty: [null], // Age of Property
        GatedCommunity: [null], // Gated Community
        Description: [null] // Description
      }),
      Photo: this.fb.group({})
    })
  }

  //getter group  method
  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }
  get PriceInfo(){
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }
  get AddressInfo(){
    return this.addPropertyForm.controls['Address'] as FormGroup;
  }
  get OtherDetails(){
    return this.addPropertyForm.controls['OtherDetails'] as FormGroup;
  }


  // getter control method 
  get SellRent(){
    return this.BasicInfo.controls['SellRent'] as FormGroup;
  }
  get BHK(){
    return this.BasicInfo.controls['BHK'] as FormGroup;
  }
  get PType(){
    return this.BasicInfo.controls['PType'] as FormGroup;
  }
  get FType(){
    return this.BasicInfo.controls['FType'] as FormGroup;
  }
  get Name(){
    return this.BasicInfo.controls['Name'] as FormGroup;
  }
  get City(){
    return this.BasicInfo.controls['City'] as FormGroup;
  }


  get Price(){
    return this.PriceInfo.controls['Price'] as FormGroup;
  }
  get Security(){
    return this.PriceInfo.controls['Security'] as FormGroup;
  }
  get Maintenance(){
    return this.PriceInfo.controls['Maintenance'] as FormGroup;
  }
  get builtArea(){
    return this.PriceInfo.controls['builtArea'] as FormGroup;
  }
  get CarpetArea(){
    return this.PriceInfo.controls['CarpetArea'] as FormGroup;
  }

  
  get Floor(){
    return this.AddressInfo.controls['Floor'] as FormGroup;
  }
  get TotFloor(){
    return this.AddressInfo.controls['TotFloor'] as FormGroup;
  }
  get Datepicker(){
    return this.AddressInfo.controls['Datepicker'] as FormGroup;
  }
  get address(){
    return this.AddressInfo.controls['address'] as FormGroup;
  }
  get Landmark(){
    return this.AddressInfo.controls['Landmark'] as FormGroup;
  }


  
  
  get RTM(){
    return this.OtherDetails.controls['RTM'] as FormGroup;
  }
  get AgeOfProperty(){
    return this.OtherDetails.controls['AgeOfProperty'] as FormGroup;
  }
  get GatedCommunity(){
    return this.OtherDetails.controls['GatedCommunity'] as FormGroup;
  }
  get Description(){
    return this.OtherDetails.controls['Description'] as FormGroup;
  }

  back(){
    this.router.navigate(['/'])

  }

  mapProperty():void{
  this.property.Id = this.service.newPropID();
  this.property.SellRent = this.SellRent.value;
  this.property.BHK = this.BHK.value;
  this.property.PType = this.PType.value;
  this.property.Name = this.Name.value;
  this.property.City =this.City.value;
  this.property.FType = this.FType.value;

  this.property.Price = this.Price.value;
  this.property.Security = this.Security.value;
  this.property.Maintenance = this.Maintenance.value;
  this.property.builtArea = this.builtArea.value;
  this.property.CarpetArea = this.CarpetArea.value;

  this.property.FloorNo = this.Floor.value;
  this.property.TotalFloor = this.TotFloor.value;
  this.property.Address = this.address.value;
  this.property.Address2 = this.Landmark.value;

  this.property.RTM = this.RTM.value;
  // this.property.AOP = ;
  this.property.Gated= this.GatedCommunity.value; 
  // this.property.MainEntrance = ;
  this.property.Description = this.Description.value;
  this.property.PostedOn = new Date().toString();



  }

  onSubmit(){
    this.nextClicked=true;
    if(this.allTabsValid()){
      this.mapProperty();
      this.service.addProperty(this.property)
      this.alertify.Success('Congats,your property listed successfully on our website')
      if(this.SellRent.value === 2){
        this.router.navigate(['/rent-property'])
      }else{
        this.router.navigate(['/'])
      }
    }else{
      this.alertify.Failure('Please review form , enter all the fields')
    }
  

  
  }

  allTabsValid():boolean{
    if(this.BasicInfo.invalid){
      this.staticTabs.tabs[0].active = true;
      return false;
    }
    if(this.PriceInfo.invalid){
      this.staticTabs.tabs[1].active = true;
      return false;
    }
    if(this.AddressInfo.invalid){
      this.staticTabs.tabs[2].active = true;
      return false;
    }
    if(this.OtherDetails.invalid){
      this.staticTabs.tabs[3].active = true;
      return false;
    }
    return true;
  }

}
