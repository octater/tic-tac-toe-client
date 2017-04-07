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
  game.clicks = 0
  game.playerup = 1
  game.game = data.game
  game.gameOver = 0
  game.isReady = 'Y'
  console.log('here is the game after a create game was issued', game)
  $('#signOut').modal('hide')
  $('#box1').css('background-color', '#fff')
  $('#box2').css('background-color', '#fff')
  $('#box3').css('background-color', '#fff')
  $('#box4').css('background-color', '#fff')
  $('#box5').css('background-color', '#fff')
  $('#box6').css('background-color', '#fff')
  $('#box7').css('background-color', '#fff')
  $('#box8').css('background-color', '#fff')
  $('#box9').css('background-color', '#fff')
  $('#player-now-up').text('Player 1 is now on the clock')
}

const createGameFailure = (error) => {
  console.error('createGameFailiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with creating a new game'
  $('#alert-modal-title').html(title)
  $('#alert-modal-body').html(body)
  $('#alert-modal').modal('show')
}

const updateMoveSuccess = (data) => {
  console.log('here is the game after an update move was issued', game)
}

const updateMoveFailure = (error) => {
  console.error('createGameFailiure log', error)
  const title = 'Danger Will Robinson'
  const body = 'Error with move update for the game'
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
  createGameFailure,
  updateMoveSuccess,
  updateMoveFailure
  // signOutSuccess,
  // signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
}
