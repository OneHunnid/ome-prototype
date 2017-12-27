import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addAddress } from '../store'

import AddAddress from './AddAddress'

class AddressComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { title, description, addresses, addAddressType } = this.props

    const foobar = _.map(addresses, function(key) {
      console.log(key.completed)
      if (key.completed == true) {
        console.log('ADDRESS IS TRUE', key.type)
        return <AddressOption address={key} />
      }
    })

    // handleClick={this.__handleChosenAddress.bind(this)}


    const residenceAddress = _.find(addresses, {type: 'Residence'})
    const royaltyAddress = _.find(addresses, {type: 'Royalty'})
    const billingAddress = _.find(addresses, {type: 'Billing'})

    return (
      <div className="form-group">
        <div className="form-group__label">{title}</div>
        <div className="form-group__description">{description}</div>
        <div className="row">
          <div className="js-address-option-group">
{foobar}
          </div>
        </div>
        <AddAddress addAddressType={addAddressType} label={"Add Address"}/>
      </div>
    )
  }
}

class AddressOption extends React.Component {
  constructor(props){
    super(props)
  }
  __handleChosenAddress(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-address-option"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  render() {
    const { address } = this.props

// onClick={this.props.handleClick.bind(this)}
    return (
      <div className="row">
        <div className="button button--option col col-12 js-address-option" onClick={this.__handleChosenAddress}>
          <span className="option-label">{address.type}</span><span className="option-desc">{address.addressOne}, {address.addressTwo}, {address.city}, {address.state}, {address.zip}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ addresses }) => ({ addresses })

export default connect(mapStateToProps, null)(AddressComponent)
