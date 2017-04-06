'use strict'

// const config = require('./config')

const authEvents = require('./auth/events.js')
const game = require('./player.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})

$(() => {
  $('#box1').on('click', onBox1)
})

const onBox1 = function (event) {
  event.preventDefault()

  console.log('box1 has been clicked')

  if (Object.keys(game).length === 0) {
    const title = 'No practice is allowed'
    const body = 'Please make sure you are signed in and started a new game'
    $('#alert-modal-title').html(title)
    $('#alert-modal-body').html(body)
    $('#alert-modal').modal('show')
    return
  }

  $(this).css('background-color', '#5e91fe')
  // $(this).css('background-image', 'url(http://i.ebayimg.com/images/g/4SkAAOSw-W5UwaKN/s-l400.jpg)')
  // $(this).css('background-image', 'url(https://img.clipartfest.com/467e677f2973f743fba10361876bb9c9_png-small-medium-large-x-clipart-png_300-300.png)')
  // $(this).css('background-size', 'cover')
}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
