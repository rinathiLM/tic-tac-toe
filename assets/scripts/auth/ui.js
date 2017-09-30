'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#home-page-message').text('You signed up successfully! Please sign into your new account to start playing!')
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').show()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#home-page-message').text('There was an error signing up, please try again.')
  $('#sign-up-name').val('')
  $('#sign-up-pwd').val('')
  $('#sign-up-pwd-2').val('')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#home-page-message').text('What would you like to do now?')
  $('.sign-up-functionality').hide()
  $('.sign-in-functionality').hide()
  $('.password-functionality').show()
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
  $('.modal fade').show()
  $('.btn.btn-primary').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#home-page-message').text('There was an error signing in, please try again.')
  $('#sign-in-name').val('')
  $('#sign-in-pwd').val('')
}

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  $('#home-page-message').text('Changed password successfully. What would you like to do now?')
  $('.c').
  $('#old-pwd').val('')
  $('#new-pwd').val('')
  $('.sign-out').show()
  $('.new-game').show()
  $('.stats').show()
  $('.sign-out').show()
}

const changePasswordFailure = function (error) {
  console.error(error)
  // $('#message').text('There was an error, please try updating your password again.')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  store.user = null // setting this to null to clear out our user data
  $('.sign-up-functionality').show()
  $('.sign-in-functionality').show()
  $('.sign-out').hide()
  $('.change-pwd-functionality').hide()
  $('.display-game-board').hide()
  $('.stats').hide()
  $('.home').hide()
  $('.new-game').hide()
  $('#sign-in-user-message-success').text('')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#home-page-message').text('Something is wrong')
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
