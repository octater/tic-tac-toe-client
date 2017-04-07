'use strict'

// const app = require('../app')
const player1 = require('../player1.js')
const player2 = require('../player2.js')
const config = require('../config')

// const getFormFields = require('../../../lib/get-form-fields.js');

 // authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log('here is my data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('here is my signIn data', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    // url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  let playerId = 0
  let playerToken = 0

  console.log('here is player2 in signout ', player2)

  // if (Object.keys(player2).length !== 0) {
  if (player2.user.id !== 0) {
    playerId = player2.user.id
    playerToken = player2.user.token
    console.log('user player2 for signout ', player2)
  } else {
    playerId = player1.user.id
    playerToken = player1.user.token
    console.log('user player1 for signout ', player1)
  }

  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + '/sign-out/' + playerId,
    headers: {
      Authorization: 'Token token=' + playerToken
    }
  })
}

const changePassword = function (data) {
  let playerId = 0
  let playerToken = 0

  // if (Object.keys(player2).length !== 0) {
  if (player2.user.id !== 0) {
    playerId = player2.user.id
    playerToken = player2.user.token
    console.log('user player2 for signout ', player2)
  } else {
    playerId = player1.user.id
    playerToken = player1.user.token
    console.log('user player1 for signout ', player1)
  }

  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + playerId,
    headers: {
      Authorization: 'Token token=' + playerToken
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
