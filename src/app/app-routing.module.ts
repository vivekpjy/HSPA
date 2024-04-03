import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPropertyComponent} from '../app/property/add-property/add-property.component'
import { PropertyListComponent } from './property-list/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
  {path:'', component:PropertyListComponent},
  {path:'rent-property', component:PropertyListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'property-detail/:id', component:PropertyDetailComponent},
  {path:'user/user-login', component:UserLoginComponent},
  {path:'user/user-register', component:UserRegisterComponent},
  {path:'**', component:PropertyListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
