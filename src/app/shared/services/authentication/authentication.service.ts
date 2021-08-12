import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  public insertUser(user: User): void {
    console.log('user to insert:', user);
  }
}
