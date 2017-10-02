'use strict'

const config = require('../config')
const store = require('../store')
const game = require('../game')

const createGame = function () {
  // console.log('new game created')
  // console.log(game.game)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTurn = function (cell, currentPlayer) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cell,
          'value': currentPlayer
        },
        'over': false
      }
    }
  })
}

const updateDone = function (cell, currentPlayer) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cell,
          'value': currentPlayer
        },
        'over': false
      }
    }
  })
}

const getStats = function () {
  return $.ajax({
    url: config.apiOrigin + '/games', // /use games/?over ??
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateTurn,
  updateDone,
  getStats
}
