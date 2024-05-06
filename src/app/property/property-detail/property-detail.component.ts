import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ipropertyBase } from 'src/app/model/ipopertyBase';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId!:number;
  property=new Property()
  constructor(private route: ActivatedRoute, private router:Router, private service:HousingService){}

  ngOnInit(): void {
    this.propertyId = Number(this.route.snapshot.params['id'])

    this.route.params.subscribe(
      (params)=>{
        this.propertyId = Number(params['id'])
        this.service.getProperty(this.propertyId).subscribe(
          (data:ipropertyBase | undefined)=>{
            this.property = data as Property;
          }
        )
      }
    )
  }


}
