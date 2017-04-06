'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const player1 = require('../player1.js')
const player2 = require('../player2.js')

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
  console.log('made it to onSignOut, player1 is: ', player1)
  console.log('made it to onSignOut, player2 is: ', player2)

  if (player1.user.id === 0 && player2.user.id === 0) {
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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
