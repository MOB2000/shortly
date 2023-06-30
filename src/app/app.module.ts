import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { ShortenComponent } from './components/shorten/shorten.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvancedStatsComponent } from './components/advanced-stats/advanced-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { StatComponent } from './components/stat/stat.component';
import { BoostComponent } from './components/boost/boost.component';
import { GetStartedBtnComponent } from './components/get-started-btn/get-started-btn.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { SavedUrlsComponent } from './components/saved-urls/saved-urls.component';
import { SavedUrlItemComponent } from './components/saved-url-item/saved-url-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    ShortenComponent,
    AdvancedStatsComponent,
    StatComponent,
    BoostComponent,
    GetStartedBtnComponent,
    SiteMapComponent,
    SavedUrlsComponent,
    SavedUrlItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
