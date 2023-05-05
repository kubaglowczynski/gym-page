import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements AfterViewInit {
  isLoading = true;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  }
}
