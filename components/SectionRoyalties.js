import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

class SectionRoyalties extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleClickShowtime() {
    const cardElement = document.getElementById('js-card-royalties')
    cardElement.classList.toggle('showtime')
  }
  __handleSelectionSelected(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-address-option"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  __navigator() {
    const location = document.getElementById('section-royalties')
    const objCurrentLocation = this.props.sectionRoyalties

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
    const { sectionRoyalties } = this.props

    return (
      <section className="app__section section-royalties curtain-call" id="section-royalties">
        <div className="indicator">3</div>
        <div className="app__section__title">Royalties</div>

        <div className="form-group">
          <div className="form-group__label">Would you like to enroll in direct deposit?</div>
          <div className="form-group__description">This is the quickest way to receive your royalties.</div>
          <div className="row">
            <label className="checkbox js-checkbox-royalties">
              <input className="checkbox__icon" type="checkbox" onClick={this.__handleClickShowtime}/> Yes, I would like to enroll in direct depsit
            </label>
          </div>
          <div className="row card-bank-account" id="js-card-royalties">
            <div className="card card--elevate col col-8">
              <div className="card__title">Bank Account</div>
              <div className="card__description">Enter in your bank account details. Routing and Account Numbers are on the bottom of checks…for those of us who still use checks.</div>
              <div className="row"><input className="col col-12" placeholder="Name of Account Holder"/></div>
              <div className="row"><input className="col col-12" placeholder="Bank Name"/></div>
              <div className="row"><input className="col col-12" placeholder="Routing Number"/></div>
              <div className="row"><input className="col col-12" placeholder="Account Number"/></div>
              <div className="row">
                <select className="col col-12">
                  <option>Bank Account Type</option>
                  <option>Checking</option>
                  <option>Savings</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="form-group__label">Royalty Mailing Address</div>
          <div className="form-group__description">If you would like your royalties to be sent somewhere other than your residence, enter it below.</div>
          <div className="row">
            <div className="button button--option col col-8 js-address-option" onClick={this.__handleSelectionSelected}><span className="option-label">Resident Address</span><span className="option-desc">3440 Goldenrod Road Apartment 3C</span></div>
          </div>
          <div className="row">
            <div className="button-add">+ Add Address</div>
          </div>
        </div>

        <ButtonGroupBackContinue currentSection={sectionRoyalties} />
      </section>
    )
  }
}

const mapStateToProps = ({ sectionRoyalties }) => ({ sectionRoyalties })

export default connect(mapStateToProps, null)(SectionRoyalties)
