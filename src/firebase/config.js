import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyBXuQfmB8-QEoJzLyZ4-duvBx6n0OlKDTs",
    authDomain: "karelle-photogallery.firebaseapp.com",
    databaseURL: "https://karelle-photogallery.firebaseio.com",
    projectId: "karelle-photogallery",
    storageBucket: "karelle-photogallery.appspot.com",
    messagingSenderId: "950285698495",
    appId: "1:950285698495:web:682cd9ceadc4d953f28d0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFireStore, projectStorage, timestamp };