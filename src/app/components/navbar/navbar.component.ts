import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  style = {};

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 0) {
      this.style = { width: '8vh', transition: 'width 0.7s ease-in-out' };
    }
    else{
      this.style = { width: '18vh', transition: 'width 0.7s ease-in-out' };
    }
  }
}
