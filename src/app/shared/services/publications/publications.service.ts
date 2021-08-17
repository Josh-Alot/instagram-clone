import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { throwError } from 'rxjs';
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
}
