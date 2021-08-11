import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
  animations: [
    trigger('banner-animation', [
      state('created', style({
        opacity: 1,
      })),
      transition('void => created', [
        style({ 
          opacity: 0,
          transform: 'translate(-50px, 0)'
         }),
        animate('500ms ease-in-out'),
      ]),
    ]),
    trigger('panel-animation', [
      state('created', style({
        opacity: 1,
      })),
      transition('void => created', [
        style({
          opacity: 0,
          transform: 'translate(50px, 0)'
        }),
        animate('1500ms 0s ease-in-out', keyframes([
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 1, opacity: 1, transform: 'translateY(0)' }),
        ])),
      ]),
    ]),
  ]
})
export class AccessComponent implements OnInit {
  public bannerState = 'created';
  public panelState = 'created';
  public registry = false;

  constructor() { }

  ngOnInit(): void {

  }

  public showPanel(event: string): void {
    this.registry = event === 'registry' ? true : false;
  }

  public startAnimation(): void {
    console.log('start animation');
  }

  public endAnimation(): void {
    console.log('end animation');
  }
}
