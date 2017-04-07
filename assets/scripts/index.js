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

// $(() => {
//   $('#box1').one('click', onBox1)
//   $('#box2').one('click', onBox2)
// })
//
// const onBox1 = function (event) {
//   event.preventDefault()
//
//   console.log('box1 has been clicked')
//   game.clicks += 1
//
//   if (game.playerup === 1) {
//     $(this).css('background-color', '#5e91fe')
//     game.playerup = 2
//   } else {
//     $(this).css('background-color', '#1ea317')
//     game.playerup = 1
//   }
//
//   console.log('here is the game object: ', game)
//   // this.innerHTML = 'X'
//   // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
//   // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
//   // $(this).css('background-size', 'cover')
// }
//
// const onBox2 = function (event) {
//   event.preventDefault()
//
//   console.log('box1 has been clicked')
//   game.clicks += 1
//
//   if (game.playerup === 1) {
//     $(this).css('background-color', '#5e91fe')
//     game.playerup = 2
//   } else {
//     $(this).css('background-color', '#1ea317')
//     game.playerup = 1
//   }
//
//   console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
// }
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
