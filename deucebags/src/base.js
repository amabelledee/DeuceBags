import Rebase from 're-base'

import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBOp3mvrX3nYg14YO2J7WxWO5GLrPiuE5I",
  authDomain: "test-firebase-d2456.firebaseapp.com",
  databaseURL: "https://test-firebase-d2456.firebaseio.com",
  projectId: "test-firebase-d2456",
  storageBucket: "test-firebase-d2456.appspot.com",
  messagingSenderId: "804667893562"
};

// firebase.initializeApp(config)

const firebaseApp = firebase.initializeApp(config)
const databaseBase = Rebase.createClass(firebaseApp.database())

export {databaseBase,firebase}