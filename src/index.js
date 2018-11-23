import React from 'react';
import ReactDOM from 'react-dom';
import '../src/resources/scss/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA8O3u7KuZmjMHrSt9b8-K9XMMDDAH5oAo",
  authDomain: "woofout-36aca.firebaseapp.com",
  databaseURL: "https://woofout-36aca.firebaseio.com",
  projectId: "woofout-36aca",
  storageBucket: "woofout-36aca.appspot.com",
  messagingSenderId: "178817819886"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
