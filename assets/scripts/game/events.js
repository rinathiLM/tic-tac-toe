'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  $('#game-message').text('')
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
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player2)
      } else if (gameBoard[0] === 'O') {
        console.log(player1, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      if (gameBoard[0] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[0] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      if (gameBoard[1] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[1] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      if (gameBoard[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      if (gameBoard[3] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[3] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      if (gameBoard[6] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[6] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      if (gameBoard[2] === 'X') {
        console.log(player1, ' wins!')
        gameOver(player1)
      } else if (gameBoard[2] === 'O') {
        console.log(player2, ' wins!')
        gameOver(player2)
      }
    } else if (moveCount >= 9) {
      console.log('tie!')
      $('#game-message').text('It\'s a tie!')
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
  $('#game-message').text('The winner is player ' + winner + '!')
  api.updateGameOver()
    .then(ui.updateOverSuccess)
    .catch(ui.updateOverFailure)
}

const newGame = function (event) {
  $('.cell').text('')
  moveCount = 0
  currentPlayer = player1
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.cell').off('click')
  $('.cell').on('click', click)
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFailure)
  $('.display-game-board').show()
  $('.home').show()
}

const getPlayerStats = function (event) {
  event.preventDefault()
  console.log('got to stats')
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
  $('.home').show()
}

const goHome = function (event) {
  $('#home-page-message').text('What would you like to do now?')
  $('#game-message').text('')
  $('.password-functionality').show()
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
  $('.display-game-board').hide()
  $('.home').hide()
}

const addHandlers = function () {
  $('.cell').on('click', click) // jquery: when a cell is clicked, click function will execute
  $('.new-game').on('click', newGame) // jquery: when new game button is clicked, newGame function will execute
  $('.stats').on('click', getPlayerStats) // jquery: when stats button is clicked, getPlayerStats function will execute
  $('.home').on('click', goHome)
}

module.exports = {
  addHandlers
}
