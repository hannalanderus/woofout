import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8O3u7KuZmjMHrSt9b8-K9XMMDDAH5oAo",
    authDomain: "woofout-36aca.firebaseapp.com",
    databaseURL: "https://woofout-36aca.firebaseio.com",
    projectId: "woofout-36aca",
    storageBucket: "woofout-36aca.appspot.com",
    messagingSenderId: "178817819886"
  };
  const fire = firebase.initializeApp(config);
  export default fire;