# Next Firebase Boilerplate

This app is connected to Firebase and uses the Context API for managing global state.

Firebase handles user information in a way that is not always intuitive. The `firebase.auth()` service only handles auth and really has nothing to do with the user account system, even though it might feel like it does. In order to add data to user accounts, you need to create a separate user account system in Firestore. [This article](https://bigcodenerd.org/create-user-profile-firestore-authentication/) explains how to do it.

Use Callable functions when possible (https://firebase.google.com/docs/functions/callable) as they make endpoint security much easier and cuts down on boilerplate.