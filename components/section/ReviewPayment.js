import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewPayment extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props
    const data = application.paymentObj

    if (data.completed !== true) {
      return null
    } else {
      return (
        <section className="app__review card card--default" id="review-membership">
        <div className="app-review-group">
          <div className="row">
            <div className="col col-4 review-label">Card</div>
            <div className="col col-8 review-selection">{data.cardType}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label review-label--small">Name</div>
            <div className="col col-8 review-selection">{data.cardName}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label review-label--small">Card Number</div>
            <div className="col col-8 review-selection">{data.cardNumber}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label review-label--small">Expiration</div>
            <div className="col col-8 review-selection">{data.cardExp}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label review-label--small">CVC</div>
            <div className="col col-8 review-selection">{data.cardCvc}</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-4 review-label">Payment Total</div>
          <div className="col col-8 review-selection">${data.paymentTotal}</div>
        </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewPayment)
