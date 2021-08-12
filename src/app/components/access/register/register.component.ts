import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'insta-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output()
  public showPanel: EventEmitter<string> = new EventEmitter();
  
  public registryForm: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'fullName': new FormControl(null),
    'userName': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor() { }

  ngOnInit(): void { }

  public showLoginPanel(): void {
    this.showPanel.emit('login');
  }

  public registerUser(): void {
    console.log(this.registryForm.controls);
  }

}
