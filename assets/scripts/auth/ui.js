'use strict'

// const store = require('../store.js')

// const signInSuccess = (data) => {
//   console.log('signInSuccess data is: ', data)
//   store.user = data.credentials.user
//   console.log('success log, store user is ', store.user)
// }

const signUpFailure = (error) => {
  console.error('failiure log', error)
}

// //remove me before code-along
// const signOutSuccess = () => {
//   app.user = null;
//   console.log(app);
// };
//
// const changePasswordSuccess = () => {
//   console.log("Password Successfully Changed.");
// };
//
const success = (data) => {
  console.log('ui success: ', data)
  $('#signUp').modal('hide')
}

// const failure = (error) => {
//   console.error(error)
// }

module.exports = {
  // signInSuccess,
  signUpFailure,
  success
  //   failure,
  // success,
  //
  // signOutSuccess,
  // changePasswordSuccess
}
