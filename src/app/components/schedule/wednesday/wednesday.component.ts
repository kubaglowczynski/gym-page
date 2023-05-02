import { Component } from '@angular/core';

@Component({
  selector: 'app-wednesday',
  templateUrl: './wednesday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class WednesdayComponent {
  currentDayOfWeek: number = new Date().getDay();
  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();
  bodybuildingIsExpired:boolean = false;
  yogaIsExpired:boolean = false;
  spinningIsExpired:boolean = false;

  addDivWithClass(className: string) {
    const div = document.createElement("div");
    div.textContent = "expired";
    div.classList.add(className);
    document.body.appendChild(div);
  }

  constructor(){
    if(this.currentDayOfWeek === 3 && this.currentHour >= 12){
      this.bodybuildingIsExpired = true;
      }

    if(this.currentDayOfWeek === 3 && this.currentHour >= 14){
      this.yogaIsExpired = true;
      }

    if(this.currentDayOfWeek === 3 && this.currentHour >= 18){
      this.spinningIsExpired = true;
      }

    if(this.bodybuildingIsExpired === true ||
      this.yogaIsExpired === true ||
      this.spinningIsExpired === true){
        this.addDivWithClass("lesson_expired");
      }
  }
}
