import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'insta-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AuthenticationService]
})
export class HomeComponent implements OnInit {
  @ViewChild('timeline')
  public timeline: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void { }

  public signOut(): void {
    this.authService.signOut();
  }

  public updateTimeline(): void {
    // console.log('event emitted');

    this.timeline.updateTimeline();
  }

}
