import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMembershipType } from '../store'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

class SectionMembership extends React.Component {
  constructor(props) {
    super(props)
    this.__handleSelection = this.__handleSelection.bind(this)
  }
  __handleSelection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const membershipType = currentTarget.getAttribute('data-membership-type')
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-membership-option"));

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')

    this.props.setMembershipType(membershipType)
  }
  __navigator() {
    const location = document.getElementById('section-membership')
    const objCurrentLocation = this.props.sectionMembership

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
    const { sectionMembership } = this.props

    return (
      <section className="app__section section-membership" id="section-membership">
        <div className="indicator">1</div>
        <div className="app__section__title">Membership</div>

        <div className="">
          <div className="row u-flex">
            <div className="membership-block col col-4 js-option-writer js-membership-option" onClick={this.__handleSelection} data-membership-type="Writer">
              <div className="membership-block__title">Writer</div>
              <div className="membership-block__wrapper">
                <div className="membership-block__cost-wrapper">
                  <div className="membership-block__cost">50</div>
                  <div className="membership-block__label">Application Fee</div>
                  <div className="membership-block__sub">non-refundable</div>
                </div>
                <div className="membership-block__copy">
                  <p>Writers are people that make the melodies or write lyrics or both or somewhere in betweeen.</p>
                  <p><strong>Requirements</strong></p>
                  <ul>
                    <li>Full Name</li>
                    <li>Mailing Address</li>
                    <li>SSN/ITIN</li>
                    <li>Tax Documents</li>
                    <li>Must be older than 13*</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="membership-block col col-4 js-option-publish js-membership-option" onClick={this.__handleSelection} data-membership-type="Publisher">
              <div className="membership-block__title">Publisher</div>
              <div className="membership-block__wrapper">
                <div className="membership-block__cost-wrapper">
                  <div className="membership-block__cost">50</div>
                  <div className="membership-block__label">Application Fee</div>
                  <div className="membership-block__sub">non-refundable</div>
                </div>
                <div className="membership-block__copy">
                  <p>Publishers are people or companies that handle the business side of music like, rights, promotion, etc.</p>
                  <p><strong>Requirements</strong></p>
                  <ul>
                    <li>Full Name</li>
                    <li>Mailing Address</li>
                    <li>SSN/ITIN</li>
                    <li>Tax Documents</li>
                    <li>Must be older than 13*</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="membership-block col col-4 js-option-both js-membership-option" onClick={this.__handleSelection} data-membership-type="Writer & Publisher">
              <div className="membership-block__title">Both</div>
              <div className="membership-block__wrapper">
                <div className="membership-block__cost-wrapper">
                  <div className="membership-block__cost">75</div>
                  <div className="membership-block__label">Application Fee</div>
                  <div className="membership-block__sub">non-refundable</div>
                </div>
                <div className="membership-block__copy">
                  <p>If you’re a Writer without a Publisher, it’s best to join as both. This ensures that you’re paid the full amount for your music.</p>
                  <p><strong>Requirements</strong></p>
                  <ul>
                    <li>Full Name</li>
                    <li>Mailing Address</li>
                    <li>SSN/ITIN</li>
                    <li>Tax Documents</li>
                    <li>Must be older than 13*</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="membership-disclaimer">*If you are between 13 and 18 years of age, please have your parents/guardian fill out this online application on your behalf. If you are under 13, <a href="">please click here.</a></div>

          <ButtonGroupBackContinue currentSection={sectionMembership} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionMembership }) => ({ sectionMembership })

const mapDispatchToProps = (dispatch) => {
  return {
    setMembershipType: bindActionCreators(setMembershipType, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionMembership)
