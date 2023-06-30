import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlResult } from 'src/app/models/result';
import { ShortenService } from 'src/app/services/shorten.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss'],
})
export class ShortenComponent implements OnInit {
  form: FormGroup;
  url: string;
  isShowError: boolean = false;

  constructor(private service: ShortenService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      url: new FormControl(this.url, [Validators.required]),
    });
  }

  onSubmit() {
    this.isShowError = !this.form.valid;

    if (!this.form.valid) {
      return;
    }
    this.url = this.form.value.url;

    this.service.shorten(this.url).subscribe(
      (result) => {
        this.isShowError = !result.ok;

        if (result.ok) {
          var urlResult = new UrlResult(
            result.result.original_link,
            result.result.full_short_link
          );

          localStorage.setItem(
            urlResult.original_link,
            urlResult.full_short_link
          );

          this.service.notify(urlResult);
        }
      },
      (error) => {
        this.isShowError = true;
      }
    );
  }
}
