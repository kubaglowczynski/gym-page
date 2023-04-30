import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  isMonday:boolean = false;
  isTuesday:boolean = false;
  isWednesday:boolean = false;
  isThursday:boolean = false;
  isFriday:boolean = false;
  isSaturday:boolean = false;

  currentDayOfWeek: number = new Date().getDay();

  constructor(){
    console.log(this.currentDayOfWeek);
    if(this.currentDayOfWeek === 2){
      this.setTuesday();
    }
    else if(this.currentDayOfWeek === 3){
      this.setWednesday();
    }
    else if(this.currentDayOfWeek === 4){
      this.setThursday();
    }
    else if(this.currentDayOfWeek === 5){
      this.setFriday
    }
    else{
      this.setMonday();
    }
  }

  setMonday() {  
    this.isMonday = true;
    this.isTuesday = false;
    this.isWednesday = false;
    this.isThursday = false;
    this.isFriday = false;
    this.isSaturday = false;
  }

  setTuesday() {  
    this.isMonday = false;
    this.isTuesday = true;
    this.isWednesday = false;
    this.isThursday = false;
    this.isFriday = false;
    this.isSaturday = false; 
  }

  setWednesday() {  
    this.isMonday = false;
    this.isTuesday = false;
    this.isWednesday = true;
    this.isThursday = false;
    this.isFriday = false;
    this.isSaturday = false;
  }

  setThursday() {  
    this.isMonday = false;
    this.isTuesday = false;
    this.isWednesday = false;
    this.isThursday = true;
    this.isFriday = false;
    this.isSaturday = false;
  }
  setFriday() {  
    this.isMonday = false;
    this.isTuesday = false;
    this.isWednesday = false;
    this.isThursday = false;
    this.isFriday = true;
    this.isSaturday = false;
  }
  setSaturday() {  
    this.isMonday = false;
    this.isTuesday = false;
    this.isWednesday = false;
    this.isThursday = false;
    this.isFriday = false;
    this.isSaturday = true;
  }
}
