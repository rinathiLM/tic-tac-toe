const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePasswordClick = function (event) {
  event.preventDefault()
  // console.log('button clicked')
  $('#logged-in-message').text('')
  $('#change-password-button').hide()
  $('#unhide-change-password').show()
  $('.home').show()
  $('.new-game').hide()
  $('.stats').hide()
  $('.sign-out').hide()
  $('#old-pwd').val('')
  $('#new-pwd').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('confirm password clicked')
  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-button').on('click', onChangePasswordClick)
  $('#change-pwd').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
