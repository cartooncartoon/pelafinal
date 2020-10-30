import firebase from 'firebase';

firebase.initializeApp ({
    apiKey: "AIzaSyCCpCIeUp7jsy0FLxO5qspPROjYjwbCu6o",
    authDomain: "pela-34923.firebaseapp.com",
    databaseURL: "https://pela-34923.firebaseio.com",
    projectId: "pela-34923",
    storageBucket: "pela-34923.appspot.com",
    messagingSenderId: "1053266513105",
    appId: "1:1053266513105:web:1249988cafec8901ab89f0",
    measurementId: "G-P02D11KC84"
  });

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const db = firebase.firestore();