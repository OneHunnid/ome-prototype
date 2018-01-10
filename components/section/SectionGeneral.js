import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../../utils/navigator'
import tophat from '../../utils/tophat'

import PROMemberQuestion from '../containers/PROMemberQuestion'
import FullName from '../containers/FullName'
import DateOfBirth from '../containers/DateOfBirth'
import USResidentForTax from '../containers/USResidentForTax'
import TaxID from '../containers/TaxID'
import ResidentAddress from '../containers/ResidentAddress'
import PhoneNumber from '../containers/PhoneNumber'
import Email from '../containers/Email'
import GenreSelection from '../containers/GenreSelection'
import StageName from '../containers/StageName'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'

class SectionGeneral extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      residenceAddressObj: {}
    }
    this.__captureAddress = this.__captureAddress.bind(this)
  }
  __handleSelection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-pro-option"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  __handleNavigator() {
    const location = document.getElementById('section-general')
    const dataObj = this.props.sectionGeneral
    navigator(location, dataObj)
  }
  __captureAddress(e) {
    e.preventDefault();
    const type = 'Residence'
    const country = $('#residenceAddressCountry').val()
    const addressOne = $('#residenceAddressAddressOne').val()
    const addressTwo = $('#residenceAddressAddressTwo').val()
    const zip = $('#residenceAddressZip').val()
    const city = $('#residenceAddressCity').val()
    const state = $('#residenceAddressState').val()

    let residenceAddressObj = {
      'type': type,
      'country': country,
      'addressOne': addressOne,
      'addressTwo': addressTwo,
      'zip': zip,
      'city': city,
      'state': state
    }

    this.setState({ residenceAddressObj })

    if (country === 'USA') {
      $('#countryCode').val('+1')
      $('#countryFlag').removeClass('flag-icon-gb')
      $('#countryFlag').addClass('flag-icon-us')
    } else if (country === 'UK') {
      $('#countryCode').val('+44')
      $('#countryFlag').removeClass('flag-icon-us')
      $('#countryFlag').addClass('flag-icon-gb')
    }
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionGeneral } = this.props

    return (
      <section className="app__section section-general js-app-section-general" id="section-general">
        <div className="indicator">2</div>
        <div className="app__section__title">General</div>

        <div className="app-wrapper">
          <PROMemberQuestion />
          <FullName />
          <DateOfBirth />
          <USResidentForTax />
          <TaxID />

          <div className="form-group" onChange={this.__captureAddress} >
            <div className="form-group__label">Resident Address</div>
            <div className="form-group__description">Address of primary residence.</div>
            <div className="row">
              <div className="row">
                <select className="col col-9" id="residenceAddressCountry" >
                  <option value="placeholder" selected disabled>Country or Territory</option>
                  <option value="USA">United States of America</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div className="row">
                <input className="col col-9" placeholder="Address" id="residenceAddressAddressOne"/>
              </div>
              <div className="row">
                <input className="col col-9" placeholder="Floor, Apartment, Suite, etc" id="residenceAddressAddressTwo"/>
              </div>
              <div className="row">
                <input className="col col-2" placeholder="ZIP" type="number" id="residenceAddressZip"/>
                <input className="col col-4" placeholder="City" id="residenceAddressCity"/>
                <input className="col col-3" placeholder="State" id="residenceAddressState"/>
              </div>
            </div>
          </div>

          <PhoneNumber />
          <Email />
          <GenreSelection />
          <StageName />

          <ButtonGroupBackContinue currentSection={sectionGeneral} primaryButtonText={"Continue"} secondaryButtonText={"Back"} residenceAddress = {this.state.residenceAddressObj}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionGeneral }) => ({ sectionGeneral })

export default connect(mapStateToProps, null)(SectionGeneral)
