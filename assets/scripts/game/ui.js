'use strict'

// const store = require('../store')
const game = require('../game')

const createSuccess = function (gameObject) {
  console.log(gameObject)
  game.game = gameObject.game
  console.log(game.game)
  $('.password-functionality').hide()
  $('.stats').hide()
  $('.sign-out').hide()
  $('.display-game-board').show()
  $('.home').show()
  $('.new-game').show()
}

const createFailure = function (error) {
  console.error(error)
  // $('#user-message').text('There was an error creating a new game, please try again.')
}

const updateEachTurnSuccess = function () {
  console.log(game.game)
}

const updateEachTurnFailure = function (error) {
  console.error(error)
}

const updateOverSuccess = function () {
  console.log(game.game)
}

const updateOverFailure = function (error) {
  console.error(error)
  // $('#user-message').text('Unable to retrieve results of game, pleae try again.')
}

const getStatsSuccess = function (data) {
  console.log(data)
  const gameTotal = (data.games).length
  // const gameTieTotal = xxx
  // console.log(gameTieTotal)
  $('#logged-in-message').text('Games played: ' + gameTotal)
  $('.home').show()
  $('.change-password').hide()
  $('.stats').hide()
  $('.new-game').hide()
  $('.sign-out').hide()
}

const getStatsFailure = function (error) {
  console.error(error)
  $('#logged-in-message').text('Unable to retrieve game statistics, please try again.')
  $('.home').show()
  $('.change-pwd-functionality').hide()
  $('.change-pwd-button').hide()
  $('.stats').hide()
  $('.new-game').hide()
  $('.sign-out').hide()
}

module.exports = {
  createSuccess,
  createFailure,
  updateEachTurnSuccess,
  updateEachTurnFailure,
  updateOverSuccess,
  updateOverFailure,
  getStatsSuccess,
  getStatsFailure
}
