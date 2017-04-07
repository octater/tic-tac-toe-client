'use strict'

const api = require('./api')
const ui = require('./ui')
const player1 = require('../player1.js')
// const game = require('../game.js')
const currentMove = require('../current-move.js')

// const getFormFields = require('../../../lib/get-form-fields.js')
// const player = require('../player.js')
// const game = require('../game.js')

const setAPIOrigin = require('../../../lib/set-api-origin')

const onCreateGame = function (event) {
  event.preventDefault()

  // const data = getFormFields(event.target)

  console.log('made it to onCreateGame')

  // if (Object.keys(player1).length === 0) {
  if (player1.user.id === 0) {
    console.log('user player1 requested new game ', player1)
    const title = 'Danger Will Robinson'
    const body = 'A player 1 must be signed in before creating a new game'
    $('#alert-modal-title').html(title)
    $('#alert-modal-body').html(body)
    $('#alert-modal').modal('show')
    return
  } else {
    console.log('player1 info is: ', player1)
  }

  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.CreateGameFailure)
}

const onUpdateGame = function () {
  // event.preventDefault()

  // const data = getFormFields(event.target)

  console.log('made it to update game, data is: ', currentMove)

  api.updateMove(currentMove)
  .done(ui.updateMoveSuccess)
  .fail(ui.updateMoveFailure)
}

// const onSignOut = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   console.log('made it to onSignOut, data is: ', data)
//   console.log('made it to onSignOut, player is: ', player)
//
//   if (Object.keys(player).length === 0) {
//     const title = 'Danger Will Robinson'
//     const body = 'Error with sign-out'
//     $('#alert-modal-title').html(title)
//     $('#alert-modal-body').html(body)
//     $('#alert-modal').modal('show')
//     return
//   }
//
//   api.signOut(data)
//   .done(ui.signOutSuccess)
//   .fail(ui.signOutFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//   .done(ui.changePasswordSuccess)
//   .fail(ui.changePasswordFailure)
// }

const addHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  onUpdateGame,
  setAPIOrigin
}
