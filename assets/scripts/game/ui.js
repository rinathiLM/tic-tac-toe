'use strict'

// const store = require('../store')
const game = require('../game')

const createSuccess = function (data) {
  console.log(data)
  game.game = data.game
  console.log(game.game)
  // show only gameBoard, sign out, password, and new game button shows
  // $('.display-game-board').show()
  // $('').hide() --- hide other buttons as needed
}

const createFailure = function (error) {
  console.error(error)
  $('#user-message').text('There was an error creating a new game, please try again.')
}

const updateGameSuccess = function () {
  // some code
}

const updateGameFailure = function () {
  // some code
}

const updateOverSuccess = function (winner) {
  $('#user-message').text('Winner is ', winner)
}

const updateOverFailure = function () {
  // some code
}

const getStatsSuccess = function (data) {
  // const gameTotal = Object.keys(data.game).length
  // console.log(gameTotal)
  // const gameTieTotal = xxx
  // console.log(gameTieTotal)
  // $('#user-message').text('You played ', gameTotal, ' games')
}

const getStatsFailure = function () {
  $('#user-message').text('Unable to retrieve game statistics, please try again.')
}

module.exports = {
  createSuccess,
  createFailure,
  updateGameSuccess,
  updateGameFailure,
  updateOverSuccess,
  updateOverFailure,
  getStatsSuccess,
  getStatsFailure
}
