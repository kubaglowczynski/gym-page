import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  isLoading = true;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
