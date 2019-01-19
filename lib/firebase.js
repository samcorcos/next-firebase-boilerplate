import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

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

export const db = firebase.firestore()
export const functions = firebase.functions()

export default firebase
