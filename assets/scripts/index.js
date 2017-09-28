'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
// const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
//  gameEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const button = document.getElementById('button')

// button.onclick = function () {
//   const div = document.getElementById('newpost')
//   if (div.style.display !== 'none') {
//     div.style.display = 'none'
//   } else {
//     div.style.display = 'block'
//   }
// }

let origBoard = []

const playerX = 'X'
const playerO = 'O'
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

// selecting all cells on the game board
const cells = document.querySelectorAll('.cell')

const startGame = function () {
  document.querySelector('.endgame').style.display = 'none'
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    // cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}

const turnClick = function (square) {
  if (typeof origBoard[square.target.id] === 'number') {
    console.log(square.target.id)
    turn(square.target.id, playerX)
    turn(square.target.id, playerO)
  }
}

const turn = function (squareId, player) {
  origBoard[squareId] = player
  document.getElementById(squareId).innerText = player
  let gameWon = checkWin(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

const checkWin = function (board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a) // [])
  let gameWon = null
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player}
    }
  }
  return gameWon
}

const gameOver = function (gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player === player1 ? 'blue' : 'red'
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false)
  }
}
