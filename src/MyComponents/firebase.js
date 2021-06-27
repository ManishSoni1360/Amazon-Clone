import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD15UmxAdGEb2pv3VOgQ4ST4qqAklgzeOg",
    authDomain: "clone-ce338.firebaseapp.com",
    projectId: "clone-ce338",
    storageBucket: "clone-ce338.appspot.com",
    messagingSenderId: "668128070450",
    appId: "1:668128070450:web:aa483d1f645f24eda3e52b",
    measurementId: "G-ZKTK0YBX8J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};