import { animate, state, style, transition, trigger } from '@angular/animations';
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
        animate('500ms ease-in-out'),
      ])
    ]),
  ]
})
export class AccessComponent implements OnInit {
  public bannerState = 'created';
  public panelState = 'created';

  constructor() { }

  ngOnInit(): void {
  }

}
