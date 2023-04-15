import { Component } from '@angular/core';

@Component({
  selector: 'app-livesection',
  templateUrl: './livesection.component.html',
  styleUrls: ['./livesection.component.scss']
})
export class LivesectionComponent {
  style = {};
  styleP = {};
  toggle = false;

  onClick(): void {
    this.toggle = !this.toggle;
    this.style = {
      height: this.toggle ? '150px' : '50px',
      transition: "0.4s ease"  
    };
  }

  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();

  daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDayOfWeek: number = new Date().getDay();
  currentDayName: string = this.daysOfWeek[this.currentDayOfWeek];

  changeTheme(): void {
    if (this.currentDayName === "Sunday" || this.currentHour >= 20) {
      this.styleP = {
        backgroundColor: 'red'
      }
      console.log(this.currentHour);
    }
    else {
      this.styleP = {
        backgroundColor: 'greenyellow'
      }
    }
  }

  constructor() {
    this.changeTheme();
  }
}
