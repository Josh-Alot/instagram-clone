import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'insta-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.scss']
})
export class NewPublicationComponent implements OnInit {
  public newPostForm: FormGroup = new FormGroup({
    "description": new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void { }

  public publicatePost(): void {
    console.log('published:', this.newPostForm.value);
  }

}
