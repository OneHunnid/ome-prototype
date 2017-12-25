import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

class SectionCreateAccount extends React.Component {
  constructor(props) {
    super(props)
  }
  __navigator() {
    const location = document.getElementById('section-create-account')
    const objCurrentLocation = this.props.sectionCreateAccount

    if ( objCurrentLocation.collapse == false) {
        location.classList.remove('curtain-call')
        location.classList.add('showtime')
    }
    else if ( objCurrentLocation.collapse == true) {
      location.classList.remove('showtime')
      location.classList.add('curtain-call')
    }
  }
  componentDidMount() {
    this.__navigator()
  }
  componentDidUpdate() {
    this.__navigator()
  }
  render() {
    const { sectionCreateAccount } = this.props

    return (
      <div className="app__section section-create-account curtain-call" id="section-create-account">
        <div className="indicator">5</div>
        <div className="app__section__title">Create Account</div>

        <div className="row">
          <div className="col col-8 card--default card">
            <div className="card__title">Online Member Account</div>
            <div className="card__description">Your Members Access account is where you’ll manage your ASCAP membership, register your musical works, check your royalties, access your benefits, and much more!</div>

            <div className="form-group">
              <div className="form-group__label">Username</div>
              <div className="form-group__description">This will be used to log in to your personal ASCAP Member Access account (username_459, bestmusicwriter, etc.).</div>
              <div className="row">
                <input placeholder="username" className="col col-12"/>
              </div>
            </div>

            <div className="form-group">
              <div className="form-group__label">Password</div>
              <div className="form-group__description">This will be used to log in to your personal ASCAP Member Access account.</div>
              <div className="row">
                <input placeholder="password" className="col col-12"/>
              </div>
              <div className="row">
                <input placeholder="verify password" className="col col-12"/>
              </div>
            </div>
          </div>
        </div>
        <ButtonGroupBackContinue currentSection={sectionCreateAccount}/>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionCreateAccount }) => ({ sectionCreateAccount })

export default connect(mapStateToProps, null)(SectionCreateAccount)
