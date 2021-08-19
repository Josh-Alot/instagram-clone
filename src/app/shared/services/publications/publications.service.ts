import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { throwError } from 'rxjs';
import { Publication } from '../../models/publication.model';
import { UploadProgressService } from '../progress/upload-progress.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  constructor(private uploadProgressService: UploadProgressService) { }

  public publicatePost(publication: any): void {
    firebase.database()
    .ref(`publications/${btoa(publication.email)}`)
    .push({ description: publication.description })
     .then((res: any) => {
      let imageName = res.key;
      
      firebase.storage()
              .ref()
              .child(`images/${imageName}`)
              .put(publication.image)
              .on(firebase.storage.TaskEvent.STATE_CHANGED, // listener
                  (snapshot: any) => { // snapshot the upload progress
                    this.uploadProgressService.status = 'in-progress';
                    this.uploadProgressService.uploadState = snapshot;
                  },
                  (error: any) => {
                    this.uploadProgressService.status = 'error';
                    throwError(error);
                  },
                  () => {
                    this.uploadProgressService.status = 'done';
                  }  
              );
     });
  }

  public checkPublications(userEmail: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database()
            .ref(`publications/${btoa(userEmail)}`)
            .once('value')
            .then((snapshot: any) => {
              let publications: Publication[] = [];

              snapshot.forEach((childSnapshot: any) => {
                let publication: Publication = childSnapshot.val();

                firebase.storage()
                        .ref()
                        .child(`images/${childSnapshot.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                          publication.imgUrl = url;
 
                          firebase.database()
                                  .ref(`user_details/${btoa(userEmail)}`)
                                  .once('value')
                                  .then((snapshot: any) => {
                                    publication.user = snapshot.val().user;
                                    publications.push(publication);
                                  });
                        })
              })

              resolve(publications);
              reject((error) => throwError(error));
            });
    });
  }
}
