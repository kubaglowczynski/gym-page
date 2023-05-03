import { Component } from '@angular/core';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class FridayComponent {
  currentDayOfWeek: number = new Date().getDay();
  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();
  yogaIsExpired:boolean = false;
  firstPowerliftingIsExpired:boolean = false;
  runningIsExpired:boolean = false;
  secondPowerliftingIsExpired:boolean = false;

  constructor(){
    if(this.currentDayOfWeek === 5 && this.currentHour >= 10){
      this.yogaIsExpired = true;
    }

    if(this.currentDayOfWeek === 5 && this.currentHour >= 16){
      this.firstPowerliftingIsExpired = true;
    }

    if(this.currentDayOfWeek === 5 && this.currentHour >= 18){
      this.runningIsExpired = true;
    }

    if(this.currentDayOfWeek === 5 && this.currentHour >= 19){
      this.secondPowerliftingIsExpired = true;
    }
  }
}
