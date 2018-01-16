import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProAnswer } from '../../store'

class PROMemberQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.__handleSelection = this.__handleSelection.bind(this)
  }
  __handleSelection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-pro-option"));

    const proAnswer = currentTarget.dataset.value
    const proData = {"proQuestion": proAnswer }
    this.props.addProAnswer(proData)

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label util-margin-bottom-18">Are you currently a member of a performing rights organization (PRO)?</div>
        <div className="row">
          <div className="button button--option-two col col-4 js-pro-option" data-value="yes" onClick={this.__handleSelection}>Yes</div>
          <div className="button button--option-two col col-4 js-pro-option" data-value="no" onClick={this.__handleSelection}>No</div>
          <div className="button button--option-two col col-4 js-pro-option" data-value="I don't know" onClick={this.__handleSelection}>I am not sure</div>
        </div>
        <div className="form-group__description">A PRO (like ASCAP, BMI, or PRS) collects royalties on behalf of music creators. If you are a member of a PRO, you will need a release letter that allows you to join ASCAP. You may continue through the sign-up process anyway.</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProAnswer: bindActionCreators(addProAnswer, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(PROMemberQuestion)
