import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'insta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  // TODO: implement a form validation
  public loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  });  

  @Output()
  public showPanel: EventEmitter<string> = new EventEmitter();
  
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void { }

  public showRegistryPanel(): void {
    this.showPanel.emit('registry');
  }

  public signIn(): void {
    this.authService.signIn(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
