import { Component, OnInit } from '@angular/core';
import { AdsService } from './services/ads.service';
import { AddItem } from './add-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: AddItem[];
  constructor(private adServices: AdsService) {
  }
  ngOnInit() {
    this.ads = this.adServices.getAds();
  }
}
