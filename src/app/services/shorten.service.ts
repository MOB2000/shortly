import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Result, UrlResult } from '../models/result';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  constructor(private http: HttpClient) {}

  endpoint = 'https://api.shrtco.de/v2/shorten?url=';

  private notificationSubject = new Subject<UrlResult>();

  shorten(url: string) {
    return this.http.get<Result>(this.endpoint + url);
  }

  notify(message: UrlResult) {
    this.notificationSubject.next(message);
  }

  getNotification(): Subject<UrlResult> {
    return this.notificationSubject;
  }
}
