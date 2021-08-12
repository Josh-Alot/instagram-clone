import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';

@Component({
  selector: 'insta-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  @Output()
  public showPanel: EventEmitter<string> = new EventEmitter();
  public user!: User;

  public registryForm: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'fullName': new FormControl(null),
    'userName': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void { }

  public showLoginPanel(): void {
    this.showPanel.emit('login');
  }

  public registerUser(): void {
    this.user = new User(
      this.registryForm.value.email,
      this.registryForm.value.fullName,
      this.registryForm.value.userName,
      this.registryForm.value.password,
    );

    this.authService.insertUser(this.user);
  }

}
