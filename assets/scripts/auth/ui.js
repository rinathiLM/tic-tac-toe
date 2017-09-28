'use strict'
const store = require('../store')

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

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('error')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#message').text('Signed out successfully')
  store.user = null // setting this to null to clear out our user data
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Something is wrong')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
