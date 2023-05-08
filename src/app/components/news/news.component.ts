import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit{
  isLoading = true;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }
}
