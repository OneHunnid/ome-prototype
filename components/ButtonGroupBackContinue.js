import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { collapseSection, expandSection } from '../store'

class ButtonGroupBackContinue extends React.Component {
  constructor(props){
    super(props)
    this.__navigateToNextSection = this.__navigateToNextSection.bind(this)
    this.__navigateToPreviousSection = this.__navigateToPreviousSection.bind(this)
  }
  __navigateToPreviousSection() {
    console.log('Back button clicked!')
  }
  __navigateToNextSection() {
    console.log('Continue button clicked!')

    // this.props.collapseSection(this.props.currentSection)
    // this.props.expandSection(this.props.currentSection)
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
    collapseSection: bindActionCreators(collapseSection, dispatch),
    expandSection: bindActionCreators(expandSection, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ButtonGroupBackContinue)
