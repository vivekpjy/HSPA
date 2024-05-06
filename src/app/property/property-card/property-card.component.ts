import { Component, Input } from '@angular/core';
import { ipropertyBase } from 'src/app/model/ipopertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  @Input() property!:ipropertyBase;
  @Input() hideIcons:boolean=false;
 
}
