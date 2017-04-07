'use strict'

const app = require('../app')
const player1 = require('../player1')
const game = require('../game.js')

// const getFormFields = require('../../../lib/get-form-fields.js');

 // authApi.signUp(authUi.success, authUi.failure, data);

// const signUp = function (data) {
//   console.log('here is my data: ', data)
//   return $.ajax({
//     url: app.host + '/sign-up/',
//     method: 'POST',
//     data
//   })
// }

const updateMove = function (inData) {
  console.log('here is my current move inData from within updateMove: ', inData)

  const data = {
    'game': {
      'cell': {
        'index': inData.game.cell.index,
        'value': inData.game.cell.value
      },
      'over': inData.game.over
    }
  }
  console.log('here is my current move data from within updateMove: ', data)

  return $.ajax({
    url: app.host + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + player1.user.token
    },
    data
  })
}

// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: app.host + '/sign-out/' + player.user.id,
//     headers: {
//       Authorization: 'Token token=' + player.user.token
//     }
//   })
// }

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: app.host + '/games/',
    headers: {
      Authorization: 'Token token=' + player1.user.token
    }
  })
}

module.exports = {
  createGame,
  updateMove
  // signIn,
  // signOut,
  // changePassword
}
