import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { collapseCurrent, expandNext } from '../store'

class ButtonGroupBackContinue extends React.Component {
  constructor(props){
    super(props)
    this.__navigateToNextSection = this.__navigateToNextSection.bind(this)
    this.__navigateToPreviousSection = this.__navigateToPreviousSection.bind(this)
  }
  __navigateToPreviousSection() {
  }
  __navigateToNextSection() {
    const currentLocation = this.props.currentSection
    this.props.collapseCurrent(currentLocation)

    // const nextLocation = this.props.nextSection
    // console.log('nextLocation in Button Group', nextLocation)
    // this.props.expandNext(nextLocation)
  }
  render() {
    const { currentSection } = this.props

    return (
      <div className="button-group">
        <div className="button button--back" onClick={this.__navigateToPreviousSection}>Back</div>
        <div className="button button--continue" onClick={this.__navigateToNextSection}>Continue</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    collapseCurrent: bindActionCreators(collapseCurrent, dispatch),
    expandNext: bindActionCreators(expandNext, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ButtonGroupBackContinue)
