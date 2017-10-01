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
  console.log('button clicked')
  $('.change-password').hide()
  $('.unhide-change-password').show()
  $('.new-game').hide()
  $('.stats').hide()
  $('.sign-out').hide()
  $('#logged-in-message').text('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('confirm changes clicked')
  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// put all events in this function only, this is exported
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.change-password').on('click', onChangePasswordClick)
  $('#change-pwd').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
