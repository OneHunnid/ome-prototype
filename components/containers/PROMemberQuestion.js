import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addProAnswer } from '../../store'

class PROMemberQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.__handleSelection = this.__handleSelection.bind(this)
    this.__handleSetDescription = this.__handleSetDescription.bind(this)
  }
  __handleSelection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget
    const optionsArray = Array.prototype.slice.call(document.querySelectorAll(".js-pro-option"));
    const proAnswer = currentTarget.dataset.value

    this.__handleSetDescription(proAnswer)

    const proData = {"proQuestion": proAnswer }
    this.props.addProAnswer(proData)

    optionsArray.forEach(function(option) {
      option.classList.remove('selected')
    })

    currentTarget.classList.toggle('selected')
  }
  __handleSetDescription(answer) {

    // Set Description When Clicked
    if (answer === "yes") {
      $('.js-pro-description').text("You are a member! ")
    } else if ( answer === "no" ) {
      $('.js-pro-description').text("You aren't a member??")
    } else if ( answer === "I don't know") {
      $('.js-pro-description').text("A PRO (like ASCAP, BMI, or PRS) collects royalties on behalf of music creators. If you are a member of a PRO, you will need a release letter that allows you to join ASCAP. You may continue through the sign-up process anyway.")
    }

    // toggle Description On Hover
    const currentDescription = $('.js-pro-description').text()
    
    $('.js-option-yes').on("mouseover", function() {
      $('.js-pro-description').text("You are a member! ")
    })

    $('.js-option-yes').on("mouseleave", function() {
      $('.js-pro-description').text(currentDescription)
    })

    $('.js-option-no').on("mouseover", function() {
      $('.js-pro-description').text("You aren't a member??")
    })

    $('.js-option-no').on("mouseleave", function() {
      $('.js-pro-description').text(currentDescription)
    })

    $('.js-option-idk').on("mouseover", function() {
      $('.js-pro-description').text("A PRO (like ASCAP, BMI, or PRS) collects royalties on behalf of music creators. If you are a member of a PRO, you will need a release letter that allows you to join ASCAP. You may continue through the sign-up process anyway.")
    })

    $('.js-option-idk').on("mouseleave", function() {
      $('.js-pro-description').text(currentDescription)
    })
  }
  componentDidMount() {
    this.__handleSetDescription()
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label util-margin-bottom-18">Are you currently a member of a performing rights organization (PRO)?</div>
        <div className="row">
          <div className="button button--option-two col col-4 js-pro-option js-option-yes" data-value="yes" onClick={this.__handleSelection}>Yes</div>
          <div className="button button--option-two col col-4 js-pro-option js-option-no" data-value="no" onClick={this.__handleSelection}>No</div>
          <div className="button button--option-two col col-4 js-pro-option js-option-idk" data-value="I don't know" onClick={this.__handleSelection}>I am not sure</div>
        </div>
        <div className="form-group__description js-pro-description"></div>
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
