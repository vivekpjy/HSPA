import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HousingService} from '../../service/housing.service';
import {IProperty} from '../../property_interface'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties:Array<IProperty>=[];
  constructor(private service:HousingService, private route:ActivatedRoute){}

  ngOnInit(): void {
    // this.http.get('data/property.json').subscribe((data)=>{
    //   this.properties = data
    // })
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.service.getAllProperty(this.SellRent).subscribe(data=>{
      this.properties =data;
    }, error=>{
      console.log(error)
    })
  }

}
