const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('data is ', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}

// need to close the
// const signOut = function (event) {
//   const object = getFormFields(event.target)
//   console.log(object)
//   event.preventDefault()
//   console.log(object.modal.form)
//   $('#signOut-modal').modal('hide')
// }
