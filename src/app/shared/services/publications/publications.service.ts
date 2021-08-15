import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  constructor() { }

  public publicatePost(publication: any): void {
    // firebase.database()
    //         .ref(`publications/${btoa(publication.email)}`)
    //         .push({ description: publication.description });
    
    // TODO: implement a more complex method for rename the image
    let imageName = Date.now();

    firebase.storage()
            .ref()
            .child(`images/${imageName}`)
            .put(publication.image)

    console.log(publication);
  }
}
