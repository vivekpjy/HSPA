import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import {IProperty} from '../../app/property_interface'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url='data/property.json';
  constructor(private http: HttpClient) { }

  getAllProperty(SellRent:number):Observable<IProperty[]>{
    return this.http.get<any>(this.url).pipe(
      map((data)=>{
        const propertyArray:Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id) &&  data[id].SellRent === SellRent){
            propertyArray.push(data[id])
          }
        }
        return propertyArray
      })
    );
  }
}
