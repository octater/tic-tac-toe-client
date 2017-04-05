'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  console.log('made it to onSignUp, data is: ', data)

  api.signUp(data)
  .done(ui.success)
  .fail(ui.signInFailure)
}

const onBox1 = function (event) {
  event.preventDefault()
  console.log('box1 has been clicked')
}

// const onSignIn = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.fail);
// };
//
// const onSignOut = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signOut(data)
//   .done(ui.signOutSuccess)
//   .fail(ui.fail);
// };
//
// const onChangePassword = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//   .done(ui.changePasswordSuccess)
//   .fail(ui.fail);
// };

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#box1').on('click', onBox1)
// $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
}

module.exports = {
  addHandlers
}
