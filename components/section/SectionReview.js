import React from 'react'
import $ from 'jquery'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../../utils/navigator'

import ButtonGroupBackContinue from '../ButtonGroupBackContinue'

class SectionReview extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleNavigator() {
    const location = document.getElementById('section-review')
    const dataObj = this.props.sectionReview
    navigator(location, dataObj)

    if(dataObj.collapse === false) {
      document.body.classList.add('app-review')
    } else (
      document.body.classList.remove('app-review')
    )
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionReview } = this.props

    return (
      <div className="app__section section-review" id="section-review">
        <div className="indicator">7</div>
        <div className="app__section__title">Review & Submit</div>

        <div className="app-wrapper">
          <div className="card card--default">
            <div className="card__title">Membership Agreements</div>
            <div className="card__description">Warranties & Representations and Membership Terms & Conditions.</div>
            <ol className="agreement-list">
              <li className="agreement-list-item"><a href="#">Agreement A</a></li>
              <li className="agreement-list-item"><a href="#">Agreement B</a></li>
              <li className="agreement-list-item"><a href="#">Agreement C</a></li>
            </ol>
            <div className="overflow-box">
              <p>WARRANTIES & REPRESENTATIONS</p>
              <p>A. I represent that there are non exisiting assignments or license, direct or indirect of non-dramatic performing rights in my musical works, except to or with the publisher(s). If there are assignments or licenses other than with publisher, I will submit copies of such assignments or licenses to American Society of Authors and Publishers, 7920 W. Sunset Boulevard, Third Floor, Los Angeles, CA 90046.</p>
              <p>B. I have read the ASCAP Articles of Association, Compendium of Rules and Regulations, and Second Amended Final Judgement entered in U.S. v ASCAP (“AFJ2”) and Agree to be bound by them as now in effect, and as they may be amended, and I agree to execture agrreements in such form for such periods as the Board of Directors shall have required and shall hereafter require for all members.</p>
              <p>C. Lorem ipsum dolar sit amet…</p>
            </div>

            <div className="form-group">
              <div className="row">
                <label className="checkbox">
                  <input className="checkbox__icon js-backup-witholdings" type="checkbox"/> I acknowledge that I have read both the Warranties & Representations and the ASCAP Membership Agreement and I agree to both.
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label className="checkbox">
                  <input className="checkbox__icon js-backup-witholdings" type="checkbox"/> I want ASCAP to represent me regarding <a href="#">home recording rights.</a>
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-group__label">Electronic Signature</div>
              <div className="form-group__description">Type your full name to electronically sign</div>
              <div className="row">
                <input className="col col-12" placeholder="Full Name" />
              </div>
            </div>
          </div>
          <div className="button button--continue button--submit">Submit Application</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionReview }) => ({ sectionReview })

export default connect(mapStateToProps, null)(SectionReview)
