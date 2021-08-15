import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PublicationsService } from 'src/app/shared/services/publications/publications.service';

@Component({
  selector: 'insta-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.scss'],
  providers: [ PublicationsService ]
})
export class NewPublicationComponent implements OnInit {
  public newPostForm: FormGroup = new FormGroup({
    "description": new FormControl(''),
  });

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void { }

  public publicatePost(): void {
    // console.log('published:', this.newPostForm.value);
    this.publicationsService.publicatePost();
  }

}
