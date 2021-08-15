import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PublicationsService } from 'src/app/shared/services/publications/publications.service';
import firebase from 'firebase';

@Component({
  selector: 'insta-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.scss'],
  providers: [ PublicationsService ]
})
export class NewPublicationComponent implements OnInit {
  public email!: string | null | undefined;

  public newPostForm: FormGroup = new FormGroup({
    "description": new FormControl(''),
  });

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user?.email;
    })
  }

  public publicatePost(): void {
    this.publicationsService.publicatePost({
      email: this.email,
      description: this.newPostForm.value.description,
    });
  }

}
