import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

import firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  public createUser(user: User): Promise<any> {
    return firebase.auth()
                   .createUserWithEmailAndPassword(user.email, user.password)
                   .then((res: any) => {
                     // @ts-expect-error
                     delete user.password; // deletes password
                     firebase
                        .database() 
                        .ref(`user_details/${btoa(user.email)}`) // converts a string into base64
                        .set({ user: user })
                   })
                   .catch((err: Error) => console.log(err));
  }

  public signIn(email: string, password: string): void {
    firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              firebase.auth()
                      .currentUser?.getIdToken()
                      .then((tokenID: string) => {
                         localStorage.setItem('tokenID', tokenID);
                         this.router.navigate(['/home'])
                      })
            })
            .catch((err: Error) => console.error(err));
  }

  public signOut(): void {
    firebase.auth()
            .signOut()
            .then(() => {
              localStorage.removeItem('tokenID');
              this.router.navigate(['/']);
            });
  }

  public isAuthenticated(): boolean {
    if(localStorage.getItem('tokenID') === null) {
      this.router.navigate(['/']);
    }
    
    return localStorage.getItem('tokenID') !== null;
  }
}
