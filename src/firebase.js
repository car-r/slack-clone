// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4f1BTNbEohEonL8Ne4OakEdkt8Wp8C8I",
    authDomain: "slack-clone-d4bfd.firebaseapp.com",
    projectId: "slack-clone-d4bfd",
    storageBucket: "slack-clone-d4bfd.appspot.com",
    messagingSenderId: "994021036071",
    appId: "1:994021036071:web:41631ba916682139403e02",
    measurementId: "G-2X92CMT12D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, db }