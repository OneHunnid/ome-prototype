import React from 'react'
import _ from 'lodash'
import $ from 'jquery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import navigator from '../../utils/navigator'
import { addRoyaltiesData } from '../../store'

import AddressComponent from '../AddressComponent'
import DirectDeposit from '../containers/DirectDeposit'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'
import ReviewRoyalties from './ReviewRoyalties'

class SectionRoyalties extends React.Component {
  constructor(props) {
    super(props)

    this.__handleDataToStore = this.__handleDataToStore.bind(this)
  }
  __handleNavigator() {
    const location = document.getElementById('section-royalties')
    const dataObj = this.props.sectionRoyalties
    navigator(location, dataObj)
  }
  __handleDataToStore() {
    // direct deposit information
    function ddStatus() {
      const checkboxStatus = $('#directDepositCheckbox').prop('checked')
      if (checkboxStatus == true) {
        return 'Yes'
      } else {
        return 'No'
      }
    }

    const directeDepositStatus = ddStatus()
    const accountHolder = $('.js-account-holder').val()
    const bankName = $('.js-bank-name').val()
    const routingNumber = $('.js-routing-number').val()
    const accountNumber = $('.js-account-number').val()
    const accountType = $('.js-account-type').val()

    let royaltiesObj = {
      directDeposit: {
        'checked': directeDepositStatus,
        'accountHolder': accountHolder,
        'bankName': bankName,
        'routingNumber': routingNumber,
        'accountNumber': accountNumber,
        'accountType': accountType
      },
      completed: true
    }

    this.props.addRoyaltiesData(royaltiesObj)
  }
  componentDidMount() {
    this.__handleNavigator()
  }
  componentDidUpdate() {
    this.__handleNavigator()
  }
  render() {
    const { sectionRoyalties } = this.props

    return (
      <section className="app__section section-royalties" id="section-royalties">
        <div className="indicator">3</div>
        <div className="app__section__title">Royalties</div>

        <div className="app-wrapper">
          <div className="app-wrapper--form">
            <DirectDeposit />
            <div className="col col-8">
              <AddressComponent addAddressType={'Royalty'} title={"Royalty Mailing Address"} description={"If you would like your royalties to be sent somewhere other than your residence, enter it below."} />
            </div>

            <div onClick={this.__handleDataToStore}>
              <ButtonGroupBackContinue currentSection={sectionRoyalties} primaryButtonText={"Continue"} secondaryButtonText={"Back"}/>
            </div>
          </div>

          <div className="app-wrapper--review">
            <ReviewRoyalties />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionRoyalties }) => ({ sectionRoyalties })

const mapDispatchToProps = (dispatch) => {
  return {
    addRoyaltiesData: bindActionCreators(addRoyaltiesData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionRoyalties)
