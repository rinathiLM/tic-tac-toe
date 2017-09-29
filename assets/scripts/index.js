'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const button = document.getElementById('button')

// button.onclick = function () {
//   const div = document.getElementById('newpost')
//   if (div.style.display !== 'none') {
//     div.style.display = 'none'
//   } else {
//     div.style.display = 'block'
//   }
// }
