import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import navigator from '../../utils/navigator'

import AddressComponent from '../AddressComponent'
import DirectDeposit from '../containers/DirectDeposit'
import ButtonGroupBackContinue from '../ButtonGroupBackContinue'

class SectionRoyalties extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleNavigator() {
    const location = document.getElementById('section-royalties')
    const dataObj = this.props.sectionRoyalties
    navigator(location, dataObj)
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
      <section className="app__section section-royalties curtain-call" id="section-royalties">
        <div className="indicator">3</div>
        <div className="app__section__title">Royalties</div>

        <div className="app-wrapper">
          <DirectDeposit />
          <div className="col col-8">
            <AddressComponent addAddressType={'Royalty'} title={"Royalty Mailing Address"} description={"If you would like your royalties to be sent somewhere other than your residence, enter it below."} />
          </div>

          <ButtonGroupBackContinue currentSection={sectionRoyalties} primaryButtonText={"Continue"} secondaryButtonText={"Back"}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ sectionRoyalties }) => ({ sectionRoyalties })

export default connect(mapStateToProps, null)(SectionRoyalties)
