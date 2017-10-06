'use strict'

const game = require('../game')

const createSuccess = function (gameObject) {
  // console.log(gameObject)
  game.game = gameObject.game
  // console.log(game.game)
  $('#logged-in-message').text('Click any cell to start playing!')
  $('#change-password-button').hide()
  $('.stats').hide()
  $('.sign-out').hide()
  $('.display-game-board').show()
  $('.home').show()
  $('.new-game').show()
}

const createFailure = function () {
//  console.error(error)
  $('#logged-in-message').text('There was an error creating a new game, please try again.')
}

const updateSuccess = function (data) {
  game.game = data.game
  // console.log(game.game)
}

const updateFailure = function () {
//  console.error(error)
}

const getStatsSuccess = function (data) {
  // console.log(data)
  const gameTotal = data.games.length
  $('#logged-in-message').text('Games played: ' + gameTotal)
  $('.home').show()
  $('#change-password-button').hide()
  $('.stats').hide()
  $('.new-game').hide()
  $('.sign-out').hide()
}

const getStatsFailure = function () {
  // console.error(error)
  $('#logged-in-message').text('Unable to retrieve game statistics, please try again.')
}

module.exports = {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  getStatsSuccess,
  getStatsFailure
}
