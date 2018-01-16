import React from 'react'
import $ from 'jquery'

class PasswordField extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Password</div>
        <div className="form-group__description">This will be used to log in to your personal ASCAP Member Access account.</div>
        <div className="row">
          <input placeholder="password" className="col col-12" type="password"/>
        </div>
        <div className="row">
          <input placeholder="verify password" className="col col-12" type="password"/>
        </div>
      </div>
    )
  }
}

export default PasswordField
