import { Component } from '@angular/core';

@Component({
  selector: 'app-livesection',
  templateUrl: './livesection.component.html',
  styleUrls: ['./livesection.component.scss']
})
export class LivesectionComponent {
  style = {};
  styleP = {};
  styleIconGym = {};
  styleIconHeart = {};
  toggle = false;
  buttonText: string = '';

  onClick(): void {
    this.toggle = !this.toggle;
    this.style = {
      maxHeight: this.toggle ? '300px' : '30px',
      transition: "0.4s ease"  
    };
  }

  nowHour: Date = new Date();
  currentHour: number = this.nowHour.getHours();

  daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDayOfWeek: number = new Date().getDay();
  currentDayName: string = this.daysOfWeek[this.currentDayOfWeek];

  
  changeTheme(): void {
    if (this.currentDayName === "Sunday" || this.currentHour <= 7 || this.currentHour >= 22) {
      this.styleP = {
        backgroundColor: 'red'
      }
      this.buttonText = 'we are closed now';
      console.log(this.currentHour);
      this.styleIconGym= {
        display: "none"
      }
    }
    else {
      this.styleP = {
        backgroundColor: 'greenyellow'
      }
      this.buttonText = 'we are open now';
      this.styleIconHeart= {
        display: "none"
      }
    }
  }

  constructor() {
    this.changeTheme();
  }
}
