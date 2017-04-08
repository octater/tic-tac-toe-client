'use strict'

// const config = require('./config')

const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')
const gamePlay = require('./gameplay.js')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config.js')
// const game = require('./game.js')

// On document ready
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  gameEvents.addHandlers()
  gamePlay.addHandlers()
})

require('./example')
