import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  constructor() { }

  public publicatePost(publication: any): void {
    firebase.database()
            .ref(`publications/${btoa(publication.email)}`)
            .push({ description: publication.description })
    console.log(publication);
  }
}
