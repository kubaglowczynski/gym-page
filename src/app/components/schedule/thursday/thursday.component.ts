import { Component } from '@angular/core';

@Component({
  selector: 'app-thursday',
  templateUrl: './thursday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class ThursdayComponent {
  currentDayOfWeek: number = new Date().getDay();
  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();
  runningIsExpired:boolean = false;
  spinningIsExpired:boolean = false;
  footballIsExpired:boolean = false;
  mmaIsExpired:boolean = false;

  constructor(){
    if(this.currentDayOfWeek === 4 && this.currentHour >= 10){
      this.runningIsExpired = true;
    }

    if(this.currentDayOfWeek === 4 && this.currentHour >= 13){
      this.spinningIsExpired = true;
    }

    if(this.currentDayOfWeek === 4 && this.currentHour >= 16){
      this.footballIsExpired = true;
    }

    if(this.currentDayOfWeek === 4 && this.currentHour >= 20){
      this.mmaIsExpired = true;
    }
  }
}
