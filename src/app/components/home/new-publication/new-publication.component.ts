import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval, Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UploadProgressService } from 'src/app/shared/services/progress/upload-progress.service';
import { PublicationsService } from 'src/app/shared/services/publications/publications.service';

import firebase from 'firebase';

@Component({
  selector: 'insta-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.scss'],
  providers: [ 
    PublicationsService, 
    UploadProgressService
   ]
})
export class NewPublicationComponent implements OnInit {
  public email!: string | null | undefined;
  private images: any;

  public publicationProgress: string = 'pendent';
  public uploadPercentage: number = 0;

  @Output()
  public updateTimeline: EventEmitter<any> = new EventEmitter();

  // TODO: implements que form validation
  public newPostForm: FormGroup = new FormGroup({
    "description": new FormControl(''),
  });

  constructor(
    private publicationsService: PublicationsService,
    private uploadProgressService: UploadProgressService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user?.email;
    })
  }

  public prepareImgToUpload(event: Event): void {
    this.images = (<HTMLInputElement>event.target).files;
  }

  public publicatePost(): void {
    this.publicationsService.publicatePost({
      email: this.email,
      image: this.images[0],
      description: this.newPostForm.value.description,
      
    });

    const uploadObservable = interval(1000);
    const continuation = new Subject();

    continuation.next(true);

    uploadObservable
      .pipe(takeUntil(continuation))
      .subscribe(
        () => {
          this.publicationProgress = 'uploading';
          this.uploadPercentage = 
          Math.round((this.uploadProgressService.uploadState.bytesTransferred /
            this.uploadProgressService.uploadState.totalBytes) * 100);

          if(this.uploadProgressService.status === 'done') {
            this.publicationProgress = 'done';
            continuation.next(false);

            // emit an event to home.component
            this.updateTimeline.emit();
          }
        },
        (error: Error) => {
          throwError(error)
        },
      );

  }

}
