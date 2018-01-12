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
      <div className="app__section section-review curtain-call" id="section-review">
        <div className="indicator">7</div>
        <div className="app__section__title">Review & Submit</div>

        <div className="app-wrapper app-wrapper--review">
          <div className="button-group button-group--no-bottom-margin">
            <div className="button button--continue">Submit Application</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sectionReview }) => ({ sectionReview })

export default connect(mapStateToProps, null)(SectionReview)
