import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { JobComponent } from './job/job.component';
import { AdHostDirective } from './directives/ad-host.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    JobComponent,
    AdHostDirective,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ProfileComponent, JobComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
