# Next Firebase Boilerplate

This app is connected to Firebase and uses the Context API for managing store state.

https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3

Firebase handles user information in a way that is not always intuitive. The `firebase.auth()` service only handles auth and really has nothing to do with the user account system, even though it might feel like it does. In order to add data to user accounts, you need to create a separate user account system in Firestore. [This article](https://bigcodenerd.org/create-user-profile-firestore-authentication/) explains how to do it.

Use Callable functions when possible (https://firebase.google.com/docs/functions/callable) as they make endpoint security much easier and cuts down on boilerplate.

- [ ] Need to figure out a better abstraction for `store` state and functions within `Provider` so I don't have to list them all in one mondo `class`
- [x] Need a better way to bind DB collections to components (currently using `onCollectionUpdate` and a bunch of lifecycle bindings)
  - [ ] show how to use the `Data` component with better documentation

## Quirks

Everything is `display: flex; flex-direction: column;` by default

## Installation

`npm i`

## Getting Started

Check the `lib/context.js` file and make sure it does the things you want it to do.

Update your credentials in `lib/firebase.js`