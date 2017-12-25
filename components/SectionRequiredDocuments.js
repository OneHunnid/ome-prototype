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
            <div className="recdoc col col-8">
              <div className="recdoc-head">
                <div className="recdoc-head-title">Required Documents</div>
                <div className="recdoc-head-desc">The below documens are needed for your application review. </div>
              </div>
              <div className="recdoc-body">
                <div className="recdoc-section">
                  <div className="recdoc-section-title">IRS Comment</div>
                  <div className="recdoc-section-desc">You have indicated that your country of residence differs from your Royalty Address. The IRS requires that ASCAP keep an explanation of this difference on file. Please provide your explanation in the area below, or upload the explanation as a document.</div>
                  <textarea placeholder="Add your comment"></textarea>
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
