'use strict'

const store = require('../store.js')

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
  store.user = data.user
  console.log('success log, store user is ', store.user)
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
  store.user = null
  console.log('here is the store after signing out', store)
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
