import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../utils/navigator'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

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
    } else if (country === 'UK') {
      $('#countryCode').val('+44')
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

          <div className="form-group">
            <div className="form-group__label">Are you currently a member of a performing rights organization (PRO)?</div>
            <div className="form-group__description">A PRO (like ASCAP, BMI, or PRS) collects royalties on behalf of music creators. If you are a member of a PRO, you will need a release letter that allows you to join ASCAP. You may continue through the sign-up process anyway.</div>
            <div className="row">
              <div className="button button--option-two col col-4 js-pro-option" onClick={this.__handleSelection}>Yes</div>
              <div className="button button--option-two col col-4 js-pro-option" onClick={this.__handleSelection}>No</div>
              <div className="button button--option-two col col-4 js-pro-option" onClick={this.__handleSelection}>I am not sure</div>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Name</div>
            <div className="form-group__description">Must appear as it does on your tax returns.</div>
            <div className="row">
              <input className="col col-4" placeholder="First" />
              <input className="col col-2" placeholder="Middle" />
              <input className="col col-4" placeholder="Last" />
              <select className="col col-2">
                <option>Suffix</option>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
                <option>Junior</option>
                <option>Senior</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Date of Birth</div>
            <div className="form-group__description">Must appear as it does on your tax returns.</div>
            <div className="row">
              <select className="col col-3">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="col col-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>12</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <input className="col col-3" placeholder="1999" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Are you a U.S. Resident for tax purposes?</div>
            <div className="form-group__description">Non-U.S. residents will need to be asked to provide a W8.</div>
            <div className="row">
              <label className="radio">
                <input className="radio__icon" type="radio" /> Yes, I am a U.S Citizen
              </label>
              <label className="radio">
                <input className="radio__icon" type="radio" /> No, I am not a U.S. Citizen
              </label>
            </div>
          </div>

          <div className="form-group" onChange={this.__captureAddress} >
            <div className="form-group__label">Resident Address</div>
            <div className="form-group__description">Address of primary residence.</div>
            <div className="row">
              <div className="row">
                <select className="col col-9" id="residenceAddressCountry" >
                  <option value="placeholder">Country or Territory</option>
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


          <div className="form-group">
            <div className="form-group__label">Tax ID</div>
            <div className="form-group__description">Please enter your SSN or ITIN</div>
            <div className="row">
            <input placeholder="***-**-****"  className="col col-6" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Phone Number</div>
            <div className="form-group__description">Country code is automatically selected</div>
            <div className="row">
              <input placeholder="+1" className="col col-3" id="countryCode"/>
              <input placeholder="555-555-5555" className="col col-3" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Email</div>
            <div className="form-group__description">This email will be used for the primary method of contact for ASCAP.</div>
            <div className="row">
              <input placeholder="name@email.com" className="col col-6"/>
            </div>
            <div className="row">
              <input placeholder="Verify email" className="col col-6"/>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Genre</div>
            <div className="form-group__description">Select the genre that most accurately represents your music composition.</div>
            <div className="row">
              <select className="col col-6">
                <option>Select genre...</option>
                <option>Christian</option>
                <option>Concert</option>
                <option>Country</option>
                <option>Dance</option>
                <option>Film</option>
                <option>Hip-Hop</option>
                <option>Jazz</option>
                <option>Latin</option>
                <option>Pop</option>
                <option>Rhythem/Soul</option>
                <option>Rock</option>
                <option>Theatre</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__label">Stage Name</div>
            <div className="form-group__description">Enter any stage names, aliases or alternte names you use.</div>
            <div className="row">
              <input className="col col-6" placeholder="Stage Name"/>
            </div>
          </div>

          <ButtonGroupBackContinue currentSection={sectionGeneral} primaryButtonText={"Continue"} secondaryButtonText={"Back"} residenceAddress = {this.state.residenceAddressObj}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionGeneral }) => ({ sectionGeneral })

export default connect(mapStateToProps, null)(SectionGeneral)
