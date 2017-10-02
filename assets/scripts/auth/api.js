'use strict'

const config = require('../config')
const store = require('../store')

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

const changePassword = function (data) {
  // console.log('data is', data)
  // console.log(store.user.id)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
