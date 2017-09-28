'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successfully signed up')
//  $('#user-message').text('You signed up successfully')
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('failed sign up')
//  $('#user-message').text('There was an error signing up, please try again')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('successfully signed in')
  // $('#user-message').text('You signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  console.log('failed sign in')
//  $('#user-message').text('There was an error signing in, please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
