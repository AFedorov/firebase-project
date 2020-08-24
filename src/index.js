import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC0Jlgwli3oJ_UfvwSRUUkm4Rr9gQsykEs",
  authDomain: "fb-test-project-92c94.firebaseapp.com",
  databaseURL: "https://fb-test-project-92c94.firebaseio.com",
  projectId: "fb-test-project-92c94",
  storageBucket: "fb-test-project-92c94.appspot.com",
  messagingSenderId: "365724622249",
  appId: "1:365724622249:web:ade9781b0d395dc065f8b8"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
