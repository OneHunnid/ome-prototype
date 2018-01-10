import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../../utils/navigator'

import UsernameField from '../containers/UsernameField'
import PasswordField from '../containers/PasswordField'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'

class SectionCreateAccount extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleNavigator() {
    const location = document.getElementById('section-create-account')
    const dataObj = this.props.sectionCreateAccount
    navigator(location, dataObj)
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionCreateAccount } = this.props

    return (
      <div className="app__section section-create-account curtain-call" id="section-create-account">
        <div className="indicator">5</div>
        <div className="app__section__title">Create Account</div>

        <div className="app-wrapper">
        
          <div className="form-group col col-8">
            <div className="card--default card">
              <div className="card__title">Online Member Account</div>
              <div className="card__description">Your Members Access account is where you’ll manage your ASCAP membership, register your musical works, check your royalties, access your benefits, and much more!</div>
              <UsernameField />
              <PasswordField />
            </div>
          </div>

          <ButtonGroupBackContinue currentSection={sectionCreateAccount} primaryButtonText={"Continue"} secondaryButtonText={"Back"}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionCreateAccount }) => ({ sectionCreateAccount })

export default connect(mapStateToProps, null)(SectionCreateAccount)
