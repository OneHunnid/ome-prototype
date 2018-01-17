import React from 'react'
import _ from 'lodash'
import $ from 'jquery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigator from '../../utils/navigator'
import { addCreateAccountData } from '../../store'

import UsernameField from '../containers/UsernameField'
import PasswordField from '../containers/PasswordField'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'
import ReviewCreateAccount from './ReviewCreateAccount'

class SectionCreateAccount extends React.Component {
  constructor(props) {
    super(props)
    this.__handleDataToStore = this.__handleDataToStore.bind(this)
  }
  __handleNavigator() {
    const location = document.getElementById('section-create-account')
    const dataObj = this.props.sectionCreateAccount
    navigator(location, dataObj)
  }
  __handleDataToStore() {
    const username = $('.js-username').val()
    const password = $('.js-password').val()

    let createAccountObj = {
      'username': username,
      'password': password,
      completed: true
    }
    console.log('FOOOOO BAAARRRR')
    this.props.addCreateAccountData(createAccountObj)
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
          <div className="app-wrapper--form">
            <div className="form-group col col-8">
              <div className="card--default card">
                <div className="card__title">Online Member Account</div>
                <div className="card__description">Your Members Access account is where you’ll manage your ASCAP membership, register your musical works, check your royalties, access your benefits, and much more!</div>
                <UsernameField />
                <PasswordField />
              </div>
            </div>
            <div onClick={this.__handleDataToStore}>
              <ButtonGroupBackContinue currentSection={sectionCreateAccount} primaryButtonText={"Continue"} secondaryButtonText={"Back"}/>
            </div>
          </div>
          <div className="app-wrapper--review">
            <ReviewCreateAccount />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionCreateAccount }) => ({ sectionCreateAccount })

const mapDispatchToProps = (dispatch) => {
  return {
    addCreateAccountData: bindActionCreators(addCreateAccountData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionCreateAccount)
