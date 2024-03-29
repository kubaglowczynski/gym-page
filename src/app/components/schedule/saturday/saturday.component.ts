import { Component } from '@angular/core';

@Component({
  selector: 'app-saturday',
  templateUrl: './saturday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class SaturdayComponent {
    footballIsExpired:boolean = false;
    currentDayOfWeek: number = new Date().getDay();
    nowHour: Date = new Date();
    currentHour: number = this.nowHour.getHours();
    
    constructor(){
      if(this.currentDayOfWeek === 6 && this.currentHour >= 9){
        this.footballIsExpired = true;
      }
    }
  }
