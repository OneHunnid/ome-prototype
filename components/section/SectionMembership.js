import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setMembershipType, addMembershipData } from '../../store'
import navigator from '../../utils/navigator'

import CompanyType from '../containers/CompanyType'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'
import ReviewMembership from './ReviewMembership'

class SectionMembership extends React.Component {
  constructor(props) {
    super(props)
    this.__handleSelection = this.__handleSelection.bind(this)
    this.__handleDataToStore = this.__handleDataToStore.bind(this)

    this.state = {}
  }
  __handleSelection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const membershipType = currentTarget.getAttribute('data-membership-type')
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-membership-option"));

    this.setState(() => {
      return {'membership' : membershipType}
    })

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
    this.__handleCompanyType(membershipType)
    this.props.setMembershipType(membershipType)
  }
  __handleNavigator() {
    const location = document.getElementById('section-membership')
    const dataObj = this.props.sectionMembership
    navigator(location, dataObj)
  }
  __handleCompanyType(membershipType) {
    const companyTypeHook = document.getElementById('fieldCompanyType')

    if (membershipType != 'Writer') {
      companyTypeHook.classList.add('showtime')
    } else {
      companyTypeHook.classList.remove('showtime')
    }
  }
  __handleDataToStore() {
    let membershipObj = {
      'membership': this.state.membership
    }

    this.props.addMembershipData(membershipObj)
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionMembership, application } = this.props

    return (
      <section className="app__section section-membership" id="section-membership">
        <div className="indicator">1</div>
        <div className="app__section__title">Membership</div>

        <div className="app-wrapper">

          <div className="app-wrapper--form">
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
                <div className="membership-block__title">Writer & Publisher</div>
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
            <div className="js-company-type">
              <CompanyType />
            </div>
            <div onClick={this.__handleDataToStore}>
              <ButtonGroupBackContinue currentSection={sectionMembership} primaryButtonText={"Continue"} secondaryButtonText={"Cancel"}/>
            </div>
          </div>

          <div className="app-wrapper--review">
            <ReviewMembership />
          </div>

        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionMembership, application }) => ({ sectionMembership, application })

const mapDispatchToProps = (dispatch) => {
  return {
    setMembershipType: bindActionCreators(setMembershipType, dispatch),
    addMembershipData: bindActionCreators(addMembershipData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionMembership)
