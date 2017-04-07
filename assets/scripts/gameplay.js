'use strict'

// const config = require('./config')

// const authEvents = require('./auth/events.js')
// const gameEvents = require('./games/events.js')
const game = require('./game.js')

const onBox1 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[0] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[0] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox2 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[1] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[1] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox3 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[2] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[2] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox4 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[3] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[3] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox5 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[4] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[4] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox6 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[5] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[5] = 'O'
  }
  $('#player-now-up').text('Player ', game.playerup, ' is now on the clock')

  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox7 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[6] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[6] = 'O'
  }
  $('#player-now-up').text('Player ', game.playerup, ' is now on the clock')

  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox8 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[7] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[7] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const onBox9 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')
  game.clicks += 1

  if (game.playerup === 1) {
    $(this).css('background-color', '#5e91fe')
    game.playerup = 2
    game.game.cells[8] = 'X'
  } else {
    $(this).css('background-color', '#1ea317')
    game.playerup = 1
    game.game.cells[8] = 'O'
  }
  $('#player-now-up').text('Player ' + game.playerup + ' is now on the clock')

  console.log('here is the game object: ', game)
  // this.innerHTML = 'X'
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

const addHandlers = () => {
  $('#box1').one('click', onBox1)
  $('#box2').one('click', onBox2)
  $('#box3').one('click', onBox3)
  $('#box4').one('click', onBox4)
  $('#box5').one('click', onBox5)
  $('#box6').one('click', onBox6)
  $('#box7').one('click', onBox7)
  $('#box8').one('click', onBox8)
  $('#box9').one('click', onBox9)
}

module.exports = {
  addHandlers
}
