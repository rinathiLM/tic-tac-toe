'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('successfully signed up')
  $('#user-message').text('You signed up successfully! What would you like to do now?')
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').hide()
  $('.change-pwd-functionality').show()
  $('.display-game-board').show()
  $('#sign-out').show()
  // show stats button
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('failed sign up')
  $('#user-message').text('There was an error signing up, please try again')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('successfully signed in')
  $('#user-message').text('What would you like to do now?')
  store.user = data.user
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').hide()
  $('.change-pwd-functionality').show()
  $('.display-game-board').show()
  $('#sign-out').show()
  // show stats button
}

const signInFailure = function (error) {
  console.error(error)
  console.log('failed sign in')
  $('#user-message').text('There was an error signing in, please try again')
}

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  $('#message').text('Changed password successfully. What would you like to do now?')
  $('#change-pwd-functionality').hide()
  $('.display-game-board').show()
  $('#sign-out').show()
  // show stats button
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('error')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#message').text('Signed out successfully')
  store.user = null // setting this to null to clear out our user data
  $('.sign-up-functionality').show()
  $('.sign-in-functionality').show()
  $('#sign-out').hide()
  $('.change-pwd-functionality').hide()
  $('.display-game-board').hide()
  $('.stats').hide()
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
