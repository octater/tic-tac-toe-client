'use strict'

const game = require('../game.js')

// const signUpSuccess = (data) => {
//   console.log('ui success: ', data)
//   $('#signUp').modal('hide')
// }
//
// const signUpFailure = (error) => {
//   console.error('failiure log', error)
//   const title = 'Danger Will Robinson'
//   const body = 'Error with sign-up'
//   $('#alert-modal-title').html(title)
//   $('#alert-modal-body').html(body)
//   $('#alert-modal').modal('show')
// }
//
// const signInSuccess = (data) => {
//   console.log('signInSuccess data is: ', data)
//   player.user = data.user
//   console.log('success log, store user is ', player.user)
//   $('#signIn').modal('hide')
// }
//
// const signInFailure = (error) => {
//   console.error('signInFailiure log', error)
//   const title = 'Danger Will Robinson'
//   const body = 'Error with sign-in'
//   $('#alert-modal-title').html(title)
//   $('#alert-modal-body').html(body)
//   $('#alert-modal').modal('show')
// }

const createGameSuccess = (data) => {
  game.game = data.game
  console.log('here is the game after a create game was issued', game)
  $('#signOut').modal('hide')
}

const createGameFailure = (error) => {
  console.error('createGameFailiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with creating a new game'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

// const changePasswordSuccess = () => {
//   console.log('change password success')
//   $('#changePassword').modal('hide')
// }
//
// const changePasswordFailure = (error) => {
//   console.error('change password Failiure log', error)
//   const title = 'Danger Will Robinson'
//   const body = 'Error with changing password'
//   $('#alert-modal-title').html(title)
//   $('#alert-modal-body').html(body)
//   $('#alert-modal').modal('show')
// }

module.exports = {
  createGameSuccess,
  createGameFailure
  // signUpSuccess,
  // signInFailure,
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
