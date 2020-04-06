import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input, OnDestroy } from '@angular/core';
import { AdHostDirective } from '../directives/ad-host.directive';
import { AddItem } from '../add-item';
import { Adcomponent } from '../contracts/adcomponent';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  @Input() ads: AddItem[];
  @ViewChild(AdHostDirective, { static: true }) adhost: AdHostDirective;
  interval: any;
  currentAdIndex = -1;
  constructor(private componetFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const aditem: AddItem = this.ads[this.currentAdIndex];

    const companyFactory = this.componetFactoryResolver.resolveComponentFactory(aditem.component);
    //  Get view to host the component into the view
    const viewContainerRef = this.adhost.viewContainerRef;
    viewContainerRef.clear();
    const componetRef = viewContainerRef.createComponent(companyFactory);
    (componetRef.instance as Adcomponent).data = aditem.data;



  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000)
  }
}
