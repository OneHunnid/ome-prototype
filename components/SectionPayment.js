import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

class SectionPayment extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleClick() {
    const donationFund = document.getElementById('js-donation-fund')
    donationFund.classList.toggle('showtime')
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
  __navigator() {
    const location = document.getElementById('section-payment')
    const objCurrentLocation = this.props.sectionPayment

    if ( objCurrentLocation.collapse == false ) {
        location.classList.remove('curtain-call')
        location.classList.add('showtime')
    }
    else if ( objCurrentLocation.collapse == true ) {
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
    const { sectionPayment } = this.props
    console.log('# SECTION PAYMENT ', sectionPayment)

    return (
      <div className="app__section section-payment curtain-call" id="section-payment">
        <div className="indicator">6</div>
        <div className="app__section__title">Payment</div>

        <div className="payment__left col col-8">
          <div className="form-group">
            <div className="form-group__label">Application Processing Fee</div>
            <div className="form-group__description ">There is a $50 non-refundable application processing fee for each member application. This will be charged once you submit your application.</div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Pay with Card</div>
            <div className="form-group__description ">Please enter the details of the credit card you will be using</div>
            <div className="row">
              <input className="col col-12" placeholder="Name" />
            </div>
            <div className="row">
              <input className="col col-12" placeholder="Card Number" />
            </div>
            <div className="row">
              <input className="col col-6" placeholder="MM/YY" />
              <input className="col col-6" placeholder="CVV" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Billing Address</div>
            <div className="form-group__description">Select your billing address.</div>
            <div className="row">
              <div className="button button--option col col-12 js-address-option--payment" onClick={this.__handleSelectionSelected}><span className="option-label">Resident Address</span><span className="option-desc">3440 Goldenrod Road Apartment 3C...</span></div>
            </div>
            <div className="row">
              <div className="button button--option col col-12 js-address-option--payment" onClick={this.__handleSelectionSelected}><span className="option-label">Royalty Address</span><span className="option-desc">1900 Broadyway, New York, NY, 10013</span></div>
            </div>
            <div className="row">
              <div className="button-add">+ Add Address</div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Donate</div>
            <div className="form-group__description">Help support ASCAP initiatives by donating today!</div>
            <div className="row">
              <label className="checkbox">
                <input className="checkbox__icon" type="checkbox" onClick={this.__handleClick}/> I would like to donate to the ASCAP legislative fund for the Arts
              </label>
            </div>
            <div className="row donation-fund" id="js-donation-fund">
              <div className="card card--elevate col col-12">
                <div className="card__title">Donate</div>
                <div className="card__description">Help support ASCAP initiatives by donating today!</div>
                <div className="row">
                  <div className="button button--option button--donation col col-4">$5</div>
                  <div className="button button--option button--donation col col-4">$10</div>
                  <div className="button button--option button--donation col col-4">$25</div>
                </div>
                <div className="row">
                  <div className="button button--option button--donation col col-4">$50</div>
                  <div className="button button--option button--donation col col-4">$100</div>
                  <div className="button button--option button--donation col col-4">OTHER</div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <hr />
            <div className="form-group__label">Application Review</div>
            <div className="form-group__description ">Before submitting, please check that the information is accurate.</div>
          </div>

          <ButtonGroupBackContinue currentSection={sectionPayment}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionPayment }) => ({ sectionPayment })

export default connect(mapStateToProps, null)(SectionPayment)
