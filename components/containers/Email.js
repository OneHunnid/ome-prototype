import React from 'react'

class Email extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Email</div>
        <div className="form-group__description">This email will be used for the primary method of contact for ASCAP.</div>
        <div className="row">
          <input placeholder="name@email.com" className="col col-6 js-email"/>
        </div>
        <div className="row">
          <input placeholder="Verify email" className="col col-6"/>
        </div>
        <label className="checkbox email-checkbox">
          <input className="checkbox__icon" type="checkbox"/> I want to receive updates about ASCAPs partners, promotions and news
        </label>
      </div>
    )
  }
}

export default Email
