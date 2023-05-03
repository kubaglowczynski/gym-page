import { Component } from '@angular/core';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class TuesdayComponent {
  currentDayOfWeek: number = new Date().getDay();
  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();
  firstRunningIsExpired:boolean = false;
  spinningIsExpired:boolean = false;
  bodybuildingIsExpired:boolean = false;
  secondRunningIsExpired:boolean = false;
  powerliftingIsExpired:boolean = false;

  constructor(){
    if(this.currentDayOfWeek === 2 && this.currentHour >= 12){
      this.firstRunningIsExpired = true;
      }
    
    if(this.currentDayOfWeek === 2 && this.currentHour >= 13){
      this.spinningIsExpired = true;
      }

    if(this.currentDayOfWeek === 2 && this.currentHour >= 14){
      this.bodybuildingIsExpired = true;
      }

    if(this.currentDayOfWeek === 2 && this.currentHour >= 18){
      this.secondRunningIsExpired = true;
      }

    if(this.currentDayOfWeek === 2 && this.currentHour >= 19){
      this.powerliftingIsExpired = true;
      }
  }
}
