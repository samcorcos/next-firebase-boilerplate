import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/storage'

export const config = {
  apiKey: 'AIzaSyDs48Asnq0WXjS0MvLRs4V0DCrfmcEpi7s',
  authDomain: 'next-firebase-boilerplate.firebaseapp.com',
  databaseURL: 'https://next-firebase-boilerplate.firebaseio.com',
  projectId: 'next-firebase-boilerplate',
  storageBucket: 'next-firebase-boilerplate.appspot.com',
  messagingSenderId: '928916417074'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let functions
if (process.env.NODE_ENV === 'development') {
  // https://stackoverflow.com/questions/50884534/how-to-test-functions-https-oncall-firebase-cloud-functions-locally
  functions = firebase.functions().useFunctionsEmulator('http://localhost:5000')
} else {
  functions = firebase.functions()
}

const db = firebase.firestore()

export {
  functions,
  db
}

export default firebase
