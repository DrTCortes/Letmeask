import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC53_IxSSmahV9a-uv5MtsduWhz_XHK2QE",
  authDomain: "letmeask-831b8.firebaseapp.com",
  databaseURL: "https://letmeask-831b8-default-rtdb.firebaseio.com",
  projectId: "letmeask-831b8",
  storageBucket: "letmeask-831b8.appspot.com",
  messagingSenderId: "34077705359",
  appId: "1:34077705359:web:bf82c7b53a576f1f9e9cfa"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }