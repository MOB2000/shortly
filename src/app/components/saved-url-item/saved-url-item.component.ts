import { Component, Input } from '@angular/core';
import { UrlResult } from 'src/app/models/result';

@Component({
  selector: 'app-saved-url-item',
  templateUrl: './saved-url-item.component.html',
  styleUrls: ['./saved-url-item.component.scss'],
})
export class SavedUrlItemComponent {
  @Input() url: UrlResult;

  isShowCopy: boolean = true;

  copy(url: string): void {
    navigator.clipboard.writeText(url);
    this.isShowCopy = false;
    ('copied');
    setTimeout(() => {
      this.isShowCopy = true;
    }, 3000);
  }
}
