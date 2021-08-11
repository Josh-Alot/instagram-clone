import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [ 
      state('hidden', style({ 
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden <=> visible', animate('1s ease')),
    ])
  ]
})
export class BannerComponent implements OnInit {
  public bannerState = 'visible';

  constructor() { }

  ngOnInit(): void {

  }

  public toggleBannerState(): void {
    this.bannerState = this.bannerState === 'hidden' ? 'visible' : 'hidden'
  }

}
