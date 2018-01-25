import React from 'react'
import $ from 'jquery'

class PasswordField extends React.Component {
  constructor(props) {
    super(props)
    this.__handleValidation = this.__handleValidation.bind(this)
    this.__displayError = this.__displayError.bind(this)
    this.__removeError = this.__removeError.bind(this)
  }
  __displayError() {
    console.log('displaying error!')
    $('.js-password-one').addClass('error')
    $('.js-password-two').addClass('error')
    $('.js-error-message').addClass('showtime')

  }
  __removeError() {
    $('.js-password-one').removeClass('error')
    $('.js-password-two').removeClass('error')
    $('.js-error-message').removeClass('showtime')
  }
  __handleValidation(){
    const passwordOne = $('.js-password-one').val()
    const passwordTwo = $('.js-password-two').val()

    if (passwordOne === passwordTwo) {
      console.log('password match!')
      this.__removeError()
    } else {
      console.log('passwords do not match!')
      this.__displayError()
    }
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Password</div>
        <div className="form-group__description">This will be used to log in to your personal ASCAP Member Access account.</div>
        <div className="row">
          <input placeholder="password" className="col col-12 field-password js-password-one" type="password"/>
        </div>
        <div className="row">
          <input onBlur={this.__handleValidation} placeholder="verify password" className="col col-12 field-password js-password-two" type="password"/>
          <span className="error-message js-error-message">Passwords do not match, try again!</span>
        </div>
      </div>
    )
  }
}

export default PasswordField
