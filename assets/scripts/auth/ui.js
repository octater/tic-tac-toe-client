'use strict'

const player1 = require('../player1.js')
const player2 = require('../player2.js')

const signUpSuccess = (data) => {
  console.log('ui success: ', data)
  $('#signUp').modal('hide')
}

const signUpFailure = (error) => {
  console.error('failiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with sign-up'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

const signInSuccess = (data) => {
  console.log('signInSuccess data is: ', data)
  // if (Object.keys(player1).length === 0) {
  if (player1.user.id === 0) {
    player1.user = data.user
    console.log('success log, signin player1 is ', player1)
    console.log('success log, signin player2 is ', player2)
  } else {
    player2.user = data.user
    console.log('success log, signin player2 is ', player2)
  }

  $('#signIn').modal('hide')
}

const signInFailure = (error) => {
  console.error('signInFailiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with sign-in'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

const signOutSuccess = () => {
  // if (Object.keys(player2).length !== 0) {
  if (player2.user.id !== 0) {
    player2.user.id = 0
    console.log('success log, signout player2 is ', player2)
  } else {
    player1.user.id = 0
    console.log('success log, signout player1 is ', player1)
  }

  $('#signOut').modal('hide')
}

const signOutFailure = (error) => {
  console.error('signOutFailiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with sign-out'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

const changePasswordSuccess = () => {
  console.log('change password success')
  $('#changePassword').modal('hide')
}

const changePasswordFailure = (error) => {
  console.error('change password Failiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with changing password'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

module.exports = {
  signInSuccess,
  signUpFailure,
  signUpSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
