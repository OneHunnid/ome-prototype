import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { moveForward, moveBack, addAddress } from '../store'

class ButtonGroupBackContinue extends React.Component {
  constructor(props){
    super(props)
    this.__navigateToNextSection = this.__navigateToNextSection.bind(this)
    this.__navigateToPreviousSection = this.__navigateToPreviousSection.bind(this)
  }
  __navigateToPreviousSection() {
    const currentLocation = this.props.currentSection
    this.props.moveBack(currentLocation)
  }
  __navigateToNextSection() {
    const currentLocation = this.props.currentSection
    const residenceAddress = this.props.residenceAddress

    this.props.moveForward(currentLocation)

    if (residenceAddress !== undefined) {
      this.props.addAddress(residenceAddress)
    }

  }
  render() {
    const { currentSection, primaryButtonText, secondaryButtonText, residenceAddress } = this.props

    return (
      <div className="button-group">
        <div className="button button--back" onClick={this.__navigateToPreviousSection}>{secondaryButtonText}</div>
        <div className="button button--continue" onClick={this.__navigateToNextSection}>{primaryButtonText}</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveForward: bindActionCreators(moveForward, dispatch),
    moveBack: bindActionCreators(moveBack, dispatch),
    addAddress: bindActionCreators(addAddress, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ButtonGroupBackContinue)
