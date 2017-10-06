'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('Signed up successfully')
  $('#home-page-message').text('You signed up successfully! Please sign into your new account to start playing!')
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').show()
}

const signUpFailure = function () {
//   console.error(error)
  $('#home-page-message').text('There was an error signing up, please try again.')
  $('#sign-up-name').val('')
  $('#sign-up-pwd').val('')
  $('#sign-up-pwd-2').val('')
}

const signInSuccess = function (data) {
  // console.log('Signed in successfully')
  store.user = data.user
  // console.log(data)
  // console.log(data.user)
  $('#home-page-message').text('')
  $('#logged-in-message').text('What would you like to do now?')
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').hide()
  $('#change-password-button').show()
  $('.new-game').show()
  $('.stats').show()
  $('.sign-out').show()
}

const signInFailure = function () {
  // console.error(error)
  $('#home-page-message').text('There was an error signing in, please try again.')
  $('#sign-in-name').val('')
  $('#sign-in-pwd').val('')
}

const changePasswordSuccess = function () {
  // console.log('Changed password successfully')
  $('#logged-in-message').text('Changed password successfully. What would you like to do now?')
  $('#unhide-change-password').hide()
  $('#change-password-button').show()
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
}

const changePasswordFailure = function () {
  // console.error(error)
  $('#logged-in-message').text('There was an error, please try updating your password again.')
}

const signOutSuccess = function () {
  // console.log('Signed out successfully')
  store.user = null // setting this to null to clear out our user data
  $('#logged-in-message').text('')
  $('.sign-up-functionality').show()
  $('.sign-in-functionality').show()
  $('.sign-out').hide()
  $('.new-game').hide()
  $('.stats').hide()
  $('.display-game-board').hide()
  $('.home').hide()
  $('#change-password-button').hide()
  // have to clear out all the values from the sign-in/up screen
  $('#sign-in-name').val('')
  $('#sign-in-pwd').val('')
  $('#sign-up-name').val('')
  $('#sign-up-pwd').val('')
  $('#sign-up-pwd-2').val('')
}

const signOutFailure = function () {
//  console.error(error)
  $('#logged-in-message').text('Something is wrong, please try signing out again.')
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
