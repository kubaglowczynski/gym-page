import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  styleCards0 = {display : 'block'};
  styleCards1 = {display : 'none'};
  styleCards2 = {display : 'none'};

  goingRight(){
    if(this.styleCards0.display === 'block'){
      this.styleCards0 = {display : 'none'}
      this.styleCards1 = {display : 'block'}
      this.styleCards2 = {display : 'none'}
      console.log("w prawo")
    }
    else if(this.styleCards1.display === 'block'){
      this.styleCards0 = {display : 'none'}
      this.styleCards1 = {display : 'none'}
      this.styleCards2 = {display : 'block'}
      console.log("w prawo2")
    }
    else if(this.styleCards2.display === 'block'){
      this.styleCards0 = {display : 'block'}
      this.styleCards1 = {display : 'none'}
      this.styleCards2 = {display : 'none'}
      console.log("w prawo3")
    }
  }

  goingLeft(){
    if(this.styleCards0.display === 'block'){
      this.styleCards0 = {display : 'none'}
      this.styleCards1 = {display : 'none'}
      this.styleCards2 = {display : 'block'}
      console.log("w lewo")
    }
    else if(this.styleCards1.display === 'block'){
      this.styleCards0 = {display : 'block'}
      this.styleCards1 = {display : 'none'}
      this.styleCards2 = {display : 'none'}
      console.log("w lewo2")
    }
    else if(this.styleCards2.display === 'block'){
      this.styleCards0 = {display : 'none'}
      this.styleCards1 = {display : 'block'}
      this.styleCards2 = {display : 'none'}
      console.log("w lewo 3")
    }
  }
}
