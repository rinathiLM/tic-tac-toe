'use strict'

const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

// const store = require('../store')
// const signOut = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/' + store.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const changePassword = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/change-password/' + store.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn
}
