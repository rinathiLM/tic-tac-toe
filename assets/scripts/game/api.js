'use strict'

const config = require('../config')
const store = require('../store')
const game = require('../game')

const createGame = () => {
  // remember to test when you login!
  console.log('new game created')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // set an empty object
    data: '{}'
  })
}

const updateGame = (index, letter) => {
  // console.log('update game to server.')
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': letter
        },
        'over': false
      }
    }
  })
}

const updateGameOver = () => {
  // console.log('send over value to server.')
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

const getStats = () => {
  console.log('get player stats')
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
  updateGame,
  updateGameOver,
  getStats
}
