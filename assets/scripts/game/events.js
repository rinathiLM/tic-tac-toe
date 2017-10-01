'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const authApi = require('../auth/api')
const authUi = require('../auth/ui')

const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let moveCount = 0
let gameBoard = ['', '', '', '', '', '', '', '', '']

const click = function (event) {
  event.preventDefault()
  const cell = this.id
  // console.log('what is this', this)
  // console.log('cell is:', cell)
  // increment move count by 1 each time click happens
  moveCount += 1
  $('#logged-in-message').text('')
  // console.log('move count is', moveCount)
  if (moveCount < 10) {
    // make html display current player's symbol
    $('#' + cell).html(currentPlayer)
    // disable the click for the current player
    $('#' + cell).off('click')
    // find index of cell that was clicked, convert to integer
    const cellIndex = parseInt(cell)
    // console.log(cellIndex)
    // update the gameBoard array at index that was selected
    gameBoard[cellIndex] = currentPlayer
    // console.log(gameBoard)
    // this will pass to the api and update each move
    api.updateEachTurn(cellIndex, currentPlayer)
      .then(ui.updateEachTurnSuccess)
      .catch(ui.updatEachTurnFailure)
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[0] === 'O') {
        console.log(player1, ' wins!')
        gameOver(player1)
      }
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
      if (gameBoard[3] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[3] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
      if (gameBoard[6] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[6] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
      if (gameBoard[1] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[1] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
      if (gameBoard[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      if (gameBoard[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (moveCount >= 9) {
      console.log('tie!')
      $('#logged-in-message').text('It\'s a tie!')
      $('.cell').off('click')
      api.updateGameOver()
        .then(ui.updateOverSuccess)
        .catch(ui.updateOverFailure)
    }
  }
  // switch player turns
  if (currentPlayer === player1) {
    currentPlayer = player2
  } else if (currentPlayer === player2) {
    currentPlayer = player1
  }
  console.log(currentPlayer)
}

const gameOver = function (winner) {
  $('.cell').off('click')
  console.log('Winner is ', winner)
  $('#logged-in-message').text('The winner is player ' + winner + '! Click below to start a new game or go back to the home page.')
  api.updateGameOver()
    .then(ui.updateOverSuccess)
    .catch(ui.updateOverFailure)
}

const newGame = function (event) {
  $('.cell').text('')
  $('#logged-in-message').text('Click any cell to start playing!')
  moveCount = 0
  currentPlayer = player1
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.cell').off('click')
  $('.cell').on('click', click)
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const getPlayerStats = function (event) {
  event.preventDefault()
  console.log('got to stats')
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

const goHome = function (event) {
  console.log('go back to home')
  $('#logged-in-message').text('What would you like to do now?')
  $('.change-password').show()
  $('.password-functionality').show()
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
  $('.display-game-board').hide()
  $('.home').hide()
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signInFailure)
}

const addHandlers = function () {
  $('.cell').on('click', click) // jquery: when a cell is clicked, click function will execute
  $('.new-game').on('click', newGame) // jquery: when new game button is clicked, newGame function will execute
  $('.stats').on('click', getPlayerStats) // jquery: when stats button is clicked, getPlayerStats function will execute
  $('.home').on('click', goHome)
  $('.sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
