import firebase from 'firebase/app'
import { createStore, combineReducers } from 'redux'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'

import {
  reducer
} from './'

const firebaseConfig = {
  apiKey: 'AIzaSyDs48Asnq0WXjS0MvLRs4V0DCrfmcEpi7s',
  authDomain: 'next-firebase-boilerplate.firebaseapp.com',
  databaseURL: 'https://next-firebase-boilerplate.firebaseio.com',
  projectId: 'next-firebase-boilerplate',
  storageBucket: '',
  messagingSenderId: '928916417074'
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

if (!firebase.apps.length) {
  // Initialize firebase instance
  firebase.initializeApp(firebaseConfig)
}

// Initialize other services on firebase instance
firebase.firestore()
firebase.functions()

// Add firebase to reducers
const rootReducer = combineReducers({
  app: reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// TODO there might be an issue with the initial state coming from somewhere other than makeStore...?
const initialState = {}

const store = createStore(rootReducer, initialState)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
export const makeStore = (_, options) => {
  return store
}
