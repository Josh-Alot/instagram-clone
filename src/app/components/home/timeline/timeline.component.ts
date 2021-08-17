import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/shared/services/publications/publications.service';

import firebase from 'firebase';

@Component({
  selector: 'insta-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [PublicationsService]
})
export class TimelineComponent implements OnInit {
  public email: string;

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    firebase.auth()
            .onAuthStateChanged((user) => {
              this.email = user?.email;
              this.updateTimeline();
            });

  }

  public updateTimeline(): void {
    this.publicationsService.checkPublications(this.email);
  }

}
