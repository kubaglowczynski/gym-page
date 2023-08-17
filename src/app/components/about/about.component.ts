import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  isLoading = true;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }
}
