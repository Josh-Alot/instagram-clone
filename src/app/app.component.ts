import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';

@Component({
  selector: 'insta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyCRQo7kdGjwWyXIBdIPWiQa_X1YgEHRX-4",
      authDomain: "instagram-clone-e1fc0.firebaseapp.com",
      projectId: "instagram-clone-e1fc0",
      databaseUrl: "https://instagram-clone-e1fc0-default-rtdb.firebaseio.com",
      storageBucket: "instagram-clone-e1fc0.appspot.com",
      messagingSenderId: "652791676858",
      appId: "1:652791676858:web:24ec392118ec6e64092783"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
