'use strict'

const signUpSuccess = function (data) {
  console.log(data)
  console.log('success')
//  $('#message').text('You signed up successfully')
}

const signUpFailure = function (error) {
  console.error(error)
  console.log('fail')
//  $('#message').text('There was an error signing up, please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
