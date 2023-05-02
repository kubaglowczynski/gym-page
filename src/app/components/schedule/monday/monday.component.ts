import { Component } from '@angular/core';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class MondayComponent {
  currentDayOfWeek: number = new Date().getDay();
  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();
  yogaIsExpired:boolean = false;
  footballIsExpired:boolean = false;
  runningIsExpired:boolean = false;
  mmaIsExpired:boolean = false;

  addDivWithClass(className: string) {
    const div = document.createElement("div");
    div.textContent = "expired";
    div.classList.add(className);
    document.body.appendChild(div);
  }

  constructor(){
    if(this.currentDayOfWeek === 1 && this.currentHour >= 10){
        this.yogaIsExpired = true;
      }

    if(this.currentDayOfWeek === 1 && this.currentHour >= 13){
        this.footballIsExpired = true;
      }
    
    if(this.currentDayOfWeek === 1 && this.currentHour >= 15){
        this.runningIsExpired = true;
      }

    if(this.currentDayOfWeek === 1 && this.currentHour >= 19){
        this.mmaIsExpired = true;
      }

    if(this.yogaIsExpired === true || 
      this.footballIsExpired === true ||
      this.runningIsExpired === true ||
      this.mmaIsExpired === true){
        this.addDivWithClass("lesson_expired");
      }

    }
}
