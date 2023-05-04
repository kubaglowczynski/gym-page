import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  firstAnswer: boolean = false;
  secondAnswer: boolean = false;
  thirdAnswer: boolean = false;
  fourthAnswer: boolean = false;

  toggleFirstAnswer(){
    if(this.firstAnswer === false){
      this.firstAnswer = true;
    }
    else{
      this.firstAnswer = false;
    }
  }

  toggleSecondAnswer(){
    if(this.secondAnswer === false){
      this.secondAnswer = true;
    }
    else{
      this.secondAnswer = false;
    }
  }

  toggleThirdAnswer(){
    if(this.thirdAnswer === false){
      this.thirdAnswer = true;
    }
    else{
      this.thirdAnswer = false;
    }
  }

  toggleFourthAnswer(){
    if(this.fourthAnswer === false){
      this.fourthAnswer = true;
    }
    else{
      this.fourthAnswer = false;
    }
  }
}
