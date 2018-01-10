import React from 'react'

class UsernameField extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Username</div>
        <div className="form-group__description">This will be used to log in to your personal ASCAP Member Access account (username_459, bestmusicwriter, etc.).</div>
        <div className="row">
          <input placeholder="username" className="col col-12"/>
        </div>
      </div>
    )
  }
}

export default UsernameField
