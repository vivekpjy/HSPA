import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { ipropertyBase } from '../model/ipopertyBase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url='data/property.json';
  constructor(private http: HttpClient) { }

  getProperty(id:number){
    return this.getAllProperty().pipe(
      map(propertiesArray=>{
        return propertiesArray.find(p=>p.Id === id)
      })
    );
  }

  getAllProperty(SellRent?:number):Observable<ipropertyBase[]>{
    return this.http.get<any>(this.url).pipe(
      map((data)=>{
        const propertyArray:Array<ipropertyBase>=[];
        const storedData = localStorage.getItem('newPop')
        if(storedData !== null){
          const localProperties = JSON.parse(storedData)
          if(localProperties){
            for(const id in localProperties){
              if(SellRent){
                if(localProperties.hasOwnProperty(id) &&  localProperties[id].SellRent === SellRent){
                  propertyArray.push(localProperties[id])
                }
              }else{
                propertyArray.push(localProperties[id])
              }
            
            }
          }
        }
        


        for(const id in data){
          if(SellRent){
            if(data.hasOwnProperty(id) &&  data[id].SellRent === SellRent){
              propertyArray.push(data[id])
            }
          }else{
            propertyArray.push(data[id])
          }
      
        }
        return propertyArray
      })
    );
  }

  addProperty(property:Property){
    const storedData = localStorage.getItem('newPop');
    if(storedData !== null){
      let newData;
      if (Array.isArray(JSON.parse(storedData))) {
          newData = [property, ...JSON.parse(storedData)];
      } else {
          newData = [property, JSON.parse(storedData)];
      }
      localStorage.setItem('newPop', JSON.stringify(newData))
    }else{
      localStorage.setItem('newPop', JSON.stringify(property))
    }
    
  }

  newPropID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+localStorage.getItem('PID')! + 1))
      return +localStorage.getItem('PID')!;
    }else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
