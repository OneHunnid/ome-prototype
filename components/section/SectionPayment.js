import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigator from '../../utils/navigator'
import { addPaymentData } from '../../store'

import CreditCardField from '../containers/CreditCardField'
import Donate from '../containers/Donate'
import PaymentSummary from '../containers/PaymentSummary'
import AddressComponent from '../AddressComponent'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'
import ReviewPayment from './ReviewPayment'

class SectionPayment extends React.Component {
  constructor(props) {
    super(props)
    this.__handleDataToStore = this.__handleDataToStore.bind(this)
  }
  __handleSelectionSelected(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-address-option--payment"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  __handleNavigator() {
    const location = document.getElementById('section-payment')
    const dataObj = this.props.sectionPayment
    navigator(location, dataObj)
  }
  __handleDataToStore() {
    const cardName = $('.js-card-name').val()
    const cardNumber = $('.js-card-number').val()
    const cardExp = $('.js-card-exp').val()
    const cardCvc = $('.js-card-cvc').val()
    const cardType = 'Visa'
    const paymentTotal = '50'

    let paymentObj = {
      'completed': true,
      'cardType': cardType,
      'cardName': cardName,
      'cardNumber': cardNumber,
      'cardExp': cardExp,
      'cardCvc': cardCvc,
      'paymentTotal': paymentTotal
    }

    this.props.addPaymentData(paymentObj)
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionPayment } = this.props


    return (
      <div className="app__section section-payment curtain-call" id="section-payment">
        <div className="indicator">6</div>
        <div className="app__section__title">Payment</div>

        <div className="app-wrapper">
          <div className="app-wrapper--form app-wrapper--payment">
            <div className="payment__left col col-8">
              <div className="form-group">
                <div className="form-group__label">Application Processing Fee</div>
                <div className="form-group__description ">There is a $50 non-refundable application processing fee for each member application. This will be charged once you submit your application.</div>
              </div>
              <CreditCardField />
              <AddressComponent addAddressType={'Billing'} title={"Billing Address"} description={"Select your billing address"} />
              <Donate />
              <div className="form-group">
                <hr />
                <div className="form-group__label">Application Review</div>
                <div className="form-group__description ">Before submitting, please check that the information is accurate.</div>
              </div>
              <div onClick={this.__handleDataToStore}>
                <ButtonGroupBackContinue currentSection={sectionPayment} primaryButtonText={"Review Application"} secondaryButtonText={"Back"}/>
              </div>
            </div>
            <div className="payment__right col col-4">
              <PaymentSummary />
            </div>
          </div>

          <div className="app-wrapper--review">
            <ReviewPayment />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionPayment }) => ({ sectionPayment })

const mapDispatchToProps = (dispatch) => {
  return {
    addPaymentData: bindActionCreators(addPaymentData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionPayment)
