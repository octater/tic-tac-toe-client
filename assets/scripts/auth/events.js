'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

// const setAPIOrigin = require('../../lib/set-api-origin')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  console.log('made it to onSignUp, data is: ', data)

  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  console.log('made it to onSignIn, data is: ', data)

  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  console.log('made it to onSignOut, data is: ', data)
  console.log('made it to onSignOut, store is: ', store)

  if (Object.keys(store).length === 0) {
    const title = 'Danger Will Robinson'
    const body = 'Error with sign-out'
    $('#alert-modal-title').html(title)
    $('#alert-modal-body').html(body)
    $('#alert-modal').modal('show')
    return
  }

  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFailure)
}

const onBox1 = function (event) {
  event.preventDefault()
  console.log('box1 has been clicked')
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#box1').on('click', onBox1)
// $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
}

module.exports = {
  addHandlers
}
