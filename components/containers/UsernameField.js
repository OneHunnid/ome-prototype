import React from 'react'

class UsernameField extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Username</div>
        <div className="form-group__description">Case sensitive and 8–20 characters. This is used to log in to your personal Member Access account (e.g., username_459).</div>
        <div className="row">
          <input placeholder="username" className="col col-12 js-username"/>
        </div>
      </div>
    )
  }
}

export default UsernameField
