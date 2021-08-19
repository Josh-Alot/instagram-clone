import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/shared/services/publications/publications.service';

import firebase from 'firebase';
import { Publication } from 'src/app/shared/models/publication.model';

@Component({
  selector: 'insta-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [PublicationsService]
})
export class TimelineComponent implements OnInit {
  public email: string;
  public publications: Publication[];

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    firebase.auth()
            .onAuthStateChanged((user) => {
              this.email = user?.email;
              this.updateTimeline();
            });

  }

  public updateTimeline(): void {
    this.publicationsService
        .checkPublications(this.email)
        .then((publications: Publication[]) => {
          this.publications = publications;
        });
  }

}
