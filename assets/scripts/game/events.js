'use strict'

const api = require('./api')
const ui = require('./ui')
const authApi = require('../auth/api')
const authUi = require('../auth/ui')

let grid = new Array(9)
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let moves = 0

const click = function (event) {
  $('#logged-in-message').text('')
  event.preventDefault()
  const cell = event.target.attributes[1].value
  console.log(cell)
  moves += 1
  // console.log('move count is', moves)
  if (moves < 10) {
    $('#' + cell).html(currentPlayer)
    $('#' + cell).off('click')
    grid[cell] = currentPlayer
    // console.log(currentPlayer)
    api.updateTurn(cell, currentPlayer)
      .then(ui.updateSuccess)
      .catch(ui.updateFailure)
    if (grid[0] === grid[1] && grid[0] === grid[2]) {
      if (grid[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[3] === grid[4] && grid[3] === grid[5]) {
      if (grid[3] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[3] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[6] === grid[7] && grid[6] === grid[8]) {
      if (grid[6] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[6] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[0] === grid[3] && grid[0] === grid[6]) {
      if (grid[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[1] === grid[4] && grid[1] === grid[7]) {
      if (grid[1] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[1] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[2] === grid[5] && grid[2] === grid[8]) {
      if (grid[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[0] === grid[4] && grid[0] === grid[8]) {
      if (grid[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (grid[2] === grid[4] && grid[2] === grid[6]) {
      if (grid[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (grid[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (moves >= 9) {
      // console.log('tie!')
      $('#logged-in-message').text('It\'s a tie! Click below to try again!')
      $('.cell').off('click')
      api.updateDone(cell, currentPlayer)
        .then(ui.updateSuccess)
        .catch(ui.updateFailure)
    }
  }
  // switch player turns after each move
  if (currentPlayer === player1) {
    currentPlayer = player2
  } else if (currentPlayer === player2) {
    currentPlayer = player1
  }
  // console.log(currentPlayer)
}

const gameOver = function (player) {
  $('.cell').off('click')
  // console.log('Winner is ', player)
  $('#logged-in-message').text('The winner is player ' + player + '! Click below to start a new game or go back to the home page.')
  api.updateDone()
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const newGame = function (event) {
  $('.cell').text('')
  moves = 0
  currentPlayer = player1
  grid = new Array(9)
  $('.cell').off('click')
  $('.cell').on('click', click)
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const getPlayerStats = function (event) {
  event.preventDefault()
  // console.log('got to stats')
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

const onHome = function (event) {
// console.log('go back to home')
  $('#logged-in-message').text('What would you like to do now?')
  $('#change-password-button').show()
  $('#unhide-change-password').hide()
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
  $('.display-game-board').hide()
  $('.home').hide()
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('signed out')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signInFailure)
}

const addHandlers = function () {
  $('.cell').on('click', click)
  $('.new-game').on('click', newGame)
  $('.stats').on('click', getPlayerStats)
  $('.home').on('click', onHome)
  $('.sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
