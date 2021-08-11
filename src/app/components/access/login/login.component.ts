import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'insta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  public showPanel: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

  public showRegistryPanel(): void {
    this.showPanel.emit('registry');
  }
}
