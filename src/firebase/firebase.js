import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

class Firebase {
  static self;
  static instance() {
    if (!Firebase.self) { Firebase.self = new Firebase(); }
    return Firebase.self;
  }

  constructor() {
    this.firebase = firebase.initializeApp({
      apiKey: "AIzaSyAQsMLyk1ws-wL1EI8YbTy8g_04nNuNAt0",
    authDomain: "task-list-83bb3.firebaseapp.com",
    projectId: "task-list-83bb3",
    storageBucket: "task-list-83bb3.appspot.com",
    messagingSenderId: "277309592728",
    appId: "1:277309592728:web:e7a46e059feca3a7122ced"
    });
    this.db = this.firebase.firestore();
    this.auth = this.firebase.auth();
    this.storage = this.firebase.storage();
  }
}

export default Firebase;


