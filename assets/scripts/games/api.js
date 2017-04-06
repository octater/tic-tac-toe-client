'use strict'

const app = require('../app')
const player1 = require('../player1')

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
//
// const signIn = function (data) {
//   console.log('here is my signIn data', data)
//   return $.ajax({
//     url: app.host + '/sign-in/',
//     method: 'POST',
//     data
//   })
// }
//
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
  createGame
  // signIn,
  // signOut,
  // changePassword
}
