# Next Firebase Boilerplate

The goal of this project is

A typical usecase for this app is as a two-sided marketplace, so this boilerplate is optimized for that type of interaction.

The primary audience in most two-sided marketplaces is the demand side—riders, not drivers; buyers, not sellers. There tend to be two separate flows for each type of user.

- User authentication with email and password
- User roles: "admin", "supplier" (drivers), "customer" (riders)
- Basic data integration
  - 5 users of various types
  - 3 items of supply
  - one customer with a completed order
- 

## Specifications

[Nextjs](https://github.com/zeit/next.js/) for easy server-side rendering and simple deploys
[next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) for simple redux integration with next
[react-redux-firebase](http://docs.react-redux-firebase.com/history/v3.0.0/) for easy integration with firebase and firestore
[standard](https://standardjs.com/) for linting and code style consistency

## Installation

`npm i`

Firebase config in `redux/store.js`

## Additional

Make sure you have `StandardJS` extension installed in your IDE.