import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

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
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
  }
}
