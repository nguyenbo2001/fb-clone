import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAT2jS60m8phy7dQRgNxbkq8sHAkqWvfxw",
  authDomain: "facebook-clone-17e1f.firebaseapp.com",
  databaseURL: "https://facebook-clone-17e1f.firebaseio.com",
  projectId: "facebook-clone-17e1f",
  storageBucket: "facebook-clone-17e1f.appspot.com",
  messagingSenderId: "201882644525",
  appId: "1:201882644525:web:a65d01439556621c9b48a4",
  measurementId: "G-PEC70GPYNX"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
