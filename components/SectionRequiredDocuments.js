import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../utils/navigator'

import ButtonGroupBackContinue from './ButtonGroupBackContinue'

class SectionRequiredDocuments extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleNavigator() {
    const location = document.getElementById('section-required-documents')
    const dataObj = this.props.sectionRequiredDocuments
    navigator(location, dataObj)
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionRequiredDocuments } = this.props

    return (
      <div className="app__section section-required-documents curtain-call" id="section-required-documents">
        <div className="indicator">4</div>
        <div className="app__section__title">Required Documents</div>

        <div className="app-wrapper">
          <div className="row">
            <div className="taxform card card--default col-12">
              <div className="card__title">W-9 Tax Form</div>
              <div className="card__description"><a href="">Learn more about W9</a></div>
              <div className="taxform-tos">
                <p>W-9 Request for Taxpayer Identification Number and Certification.</p>
                <p>The IRS requires ASCAP to maintain accurate tax information for all members. Failure to provide tax information consistent with information on file with the IRS may result in taxes being withheld from your royalty payments. Your acceptance below is a legal substitue for completing the IRS’s W-9 Certification. If you wish to review complete instructinos for the IRS Form W-9, you can download this form here.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non elit pharetra, consequat mauris ut, auctor dui. Aenean bibendum interdum ipsum, et tincidunt quam porta eu. Vivamus vel ante pulvinar, accumsan orci bibendum, tempor urna. Aenean faucibus iaculis ex, id malesuada turpis finibus eu. Vestibulum porta massa nec massa aliquam, a lacinia velit cursus. Suspendisse placerat felis pretium, suscipit nibh sit amet, hendrerit leo. Vivamus varius interdum erat eget aliquet. Vestibulum sapien leo, tincidunt eget sodales at, gravida sed sapien.</p>
              </div>
              <div className="taxform-exemption">
                <div className="form-group">
                  <div className="form-group__label">Exemptions</div>
                  <div className="form-group__description">Codes apply only to certain entities, not individuals;</div>
                </div>
                <div className="taxform-exemption--flex">
                  <div className="form-group col col-5">
                    <div className="form-group__label">Exempt Payee Code</div>
                    <div className="form-group__description">If applicable</div>
                    <div className="row">
                      <input className="col col-12" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group col col-7">
                    <div className="form-group__label">Exemption from FATCA reporting code</div>
                    <div className="form-group__description">If applicable, Applies to accounts maintained outside the U.S. </div>
                    <div className="row">
                      <input className="col col-12" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group__label">Are you subject to backup witholdings</div>
                <div className="form-group__description">Refers to point 2 above; skip if this does not apply.</div>
                <div className="row">
                  <label className="checkbox">
                    <input className="checkbox__icon" type="checkbox"/> Does not apply as I am subject to backup withholdings
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-group__label">Tax Certificate Agreement</div>
                <div className="form-group__description">Regarding the certification set forth above, please indicate whether you accept or decline.</div>
                <div className="row">
                  <label className="radio">
                    <input className="radio__icon" type="radio" name="tax"/> Yes, I agree
                  </label>
                  <label className="radio">
                    <input className="radio__icon" type="radio" name="tax"/> No, I do not agree
                  </label>
                </div>
              </div>
            </div>
          </div>

          <ButtonGroupBackContinue currentSection={sectionRequiredDocuments} primaryButtonText={"Continue"} secondaryButtonText={"Back"}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionRequiredDocuments }) => ({ sectionRequiredDocuments })

export default connect(mapStateToProps, null)(SectionRequiredDocuments)
