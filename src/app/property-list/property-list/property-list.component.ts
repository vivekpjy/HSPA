import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HousingService} from '../../service/housing.service';
import { ActivatedRoute } from '@angular/router';
import { ipropertyBase } from 'src/app/model/ipopertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties:Array<ipropertyBase>=[];
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
      const newData = localStorage.getItem('newPop');
      const newProp = newData? JSON.parse(newData) : null;
      if(newProp.SellRent === this.SellRent){
        this.properties = [newProp, ...this.properties]
      }
    }, error=>{
      console.log(error)
    })
  }

}
