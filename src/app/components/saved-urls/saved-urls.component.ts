import { Component, OnInit } from '@angular/core';
import { UrlResult } from 'src/app/models/result';
import { ShortenService } from 'src/app/services/shorten.service';

@Component({
  selector: 'app-saved-urls',
  templateUrl: './saved-urls.component.html',
  styleUrls: ['./saved-urls.component.scss'],
})
export class SavedUrlsComponent implements OnInit {
  urls: UrlResult[] = [];

  constructor(private shortenService: ShortenService) {}

  ngOnInit(): void {
    this.shortenService.getNotification().subscribe((urlResult) => {
      this.urls.push(urlResult); 
    });

    this.getSavedUrls();
  }
 
  getSavedUrls() {
    const keys = Object.keys(localStorage);

    keys.forEach((key) => {
      const urlResult = new UrlResult(key, localStorage.getItem(key) ?? '');
      this.urls.push(urlResult);
    });
  }
}
