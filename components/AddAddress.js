import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../store'

class AddAddress extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleAddAddress() {
    const button = $('.js-add-address-button')
    const card = $('.js-add-address-card')

    card.addClass('showtime')
    button.removeClass('showtime')
  }
  __handleCancelButton() {
    const button = $('.js-add-address-button')
    const card = $('.js-add-address-card')

    card.removeClass('showtime')
    button.addClass('showtime')
  }
  __handleSaveButton() {
    const card = $('.js-add-address-card')
    const type = this.props.addAddressType
    const country = $('#cardCountry').val()
    const addressOne = $('#cardAddressOne').val()
    const addressTwo = $('#cardAddressTwo').val()
    const zip = $('#cardZip').val()
    const city = $('#cardCity').val()
    const state = $('#cardState').val()

    let addressObj = {
      'type': type,
      'country': country,
      'addressOne': addressOne,
      'addressTwo': addressTwo,
      'zip': zip,
      'city': city,
      'state': state
    }

    this.props.addAddress(addressObj)

    this.__handleCancelButton()
  }
  __addAddressCheck() {
    // const button = $('.js-add-address-button')
    // const addressType = this.props.addAddressType
    // const addressArray = this.props.addresses
    // const checkRoyaltyStatus = _.find(addressArray, {'type': 'Royalty' })
    // const checkBillingStatus = _.find(addressArray, {'type': 'Billing' })
    //
    // console.log('__addAddressCheck()', checkRoyaltyStatus)

    // if (checkRoyaltyStatus.completed === true) {
    //   button.removeClass('showtime')
    // } else if ( checkRoyaltyStatus.completed === false){
    //   button.addClass('showtime')
    // }
    //
    // if (checkBillingStatus.completed === true) {
    //   button.removeClass('showtime')
    // } else {
    //   button.addClass('showtime')
    // }
  }
  render() {
    const { label, addAddressType, addresses } = this.props

    return (
      <div className="row">
        <div className="button-add add-address-button js-add-address-button showtime" onClick={this.__handleAddAddress.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          {label}
        </div>
        <div className="row add-address-card js-add-address-card">
          <div className="card card--elevate col col-12">
            <div className="card__title card__title--margin-bottom">Add Address</div>
            <div className="row">
              <select className="col col-12" id="cardCountry" >
                <option value="placeholder">Country or Territory</option>
                <option value="USA">United States of America</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className="row">
              <input className="col col-12" placeholder="Address" id="cardAddressOne"/>
            </div>
            <div className="row">
              <input className="col col-12" placeholder="Floor, Apartment, Suite, etc" id="cardAddressTwo"/>
            </div>
            <div className="row">
              <input className="col col-12" placeholder="City" id="cardCity"/>
            </div>
            <div className="row">
              <input className="col col-8" placeholder="State" id="cardState"/>
              <input className="col col-4" placeholder="ZIP" type="number" id="cardZip"/>
            </div>
            <div className="card-button-group">
              <div className="button button--cancel" onClick={this.__handleCancelButton.bind(this)}>cancel</div>
              <div className="button button--tertiary" onClick={this.__handleSaveButton.bind(this)}>Save</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ addresses }) => ({ addresses })

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: bindActionCreators(addAddress, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)
