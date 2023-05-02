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

  addDivWithClass(className: string) {
    const div = document.createElement("div");
    div.textContent = "expired";
    div.classList.add(className);
    document.body.appendChild(div);
  }

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

    if(this.yogaIsExpired === true ||
      this.firstPowerliftingIsExpired === true ||
      this.runningIsExpired === true ||
      this.secondPowerliftingIsExpired === true){
        this.addDivWithClass("lesson_expired");
      }
  }
}
