import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { TransitionImage } from 'src/app/shared/models/transition-image.model';
import { IMAGES_MOCK } from 'src/app/shared/mocks/transition-images.mock';

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
  public transitionImages: TransitionImage[] = IMAGES_MOCK;
  public transitionTimeout = 5000

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggleImages();
    }, this.transitionTimeout);
  }

  public toggleImages(): void {
    let indexImage = 0;

    for(let i = 0; i < this.transitionImages.length; i++) {
      if(this.transitionImages[i].state === 'visible') {
        this.transitionImages[i].state = 'hidden';
        indexImage = i === 4 ? 0 : i + 1;

        break;
      }
    }

    this.transitionImages[indexImage].state = 'visible'

    setTimeout(() => {
      this.toggleImages();
    }, this.transitionTimeout);
  }

}
