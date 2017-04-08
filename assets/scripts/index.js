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

  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')

require('./example')
