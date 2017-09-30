'use strict'

// const store = require('../store')
const game = require('../game')

const createSuccess = function (data) {
  console.log(data)
  game.game = data.game
  console.log(game.game)
  $('.password-functionality').hide()
  $('.stats').hide()
  $('.sign-out').hide()
  $('.new-game').show()
  $('#home-page-message').hide()
  $('#game-message').text('Click any cell to start playing!')
}

const createFailure = function (error) {
  console.error(error)
  $('#user-message').text('There was an error creating a new game, please try again.')
}

const updateEachTurnSuccess = function () {
  // some code
}

const updateEachTurnFailure = function () {
  // some code
}

const updateOverSuccess = function (winner) {
  console.log(game.game)
  // $('#user-message').text('Winner is ' + winner)
}

const updateOverFailure = function () {
  $('#user-message').text('Unable to retrieve results of game, pleae try again.')
}

const getStatsSuccess = function (data) {
  console.log(data)
  const gameTotal = (data.games).length
  // const gameTieTotal = xxx
  // console.log(gameTieTotal)
  $('#stats-message').text('Games played: ' + gameTotal)
  $('.change-pwd-functionality').hide()
  $('.change-pwd-button').hide()
  $('.stats').hide()
  $('.new-game').hide()
  $('#sign-in-user-message-success').hide()
  $('#sign-out').hide()
  // show a home button to get back to page
}

const getStatsFailure = function () {
  $('#stats-message').text('Unable to retrieve game statistics, please try again.')
  $('.new-game').hide()
  $('#sign-in-user-message-success').hide()
  $('#sign-out').hide()
  // hide password button
  // show some type of home button
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
