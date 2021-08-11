import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'insta-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output()
  public showPanel: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public showLoginPanel(): void {
    this.showPanel.emit('login');
  }

}
