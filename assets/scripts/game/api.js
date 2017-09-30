'use strict'

const config = require('../config')
const store = require('../store')
const game = require('../game')

const createGame = function () {
  // remember to test this when I'm logged in..
  console.log('new game created')
  console.log(game.game)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateEachTurn = function (cellIndex, player) {
  console.log(game)
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cellIndex,
          'value': player
        },
        'over': false
      }
    }
  })
}

const updateGameOver = function () {
  console.log(store.user)
  console.log(game.game.id)
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

const getStats = function () {
  console.log()
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateEachTurn,
  updateGameOver,
  getStats
}
