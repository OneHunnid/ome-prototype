import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewRoyalties extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props
    const data = application.royaltiesObj

    console.log(application)

    if (data.completed !== true) {
      return null
    } else {
      return (
        <section className="app__review card card--default" id="review-membership">
          <div className="app-review-group">
            <div className="row">
              <div className="col col-4 review-label">Direct Deposit</div>
              <div className="col col-8 review-selection">{data.directDeposit.checked}</div>
            </div>
            <div className="row">
              <div className="col col-4 review-label review-label--small">Account Holder</div>
              <div className="col col-8 review-selection">{data.directDeposit.accountHolder}</div>
            </div>
            <div className="row">
              <div className="col col-4 review-label review-label--small">Bank Name</div>
              <div className="col col-8 review-selection">{data.directDeposit.bankName}</div>
            </div>
            <div className="row">
              <div className="col col-4 review-label review-label--small">Routing Number</div>
              <div className="col col-8 review-selection">{data.directDeposit.routingNumber}</div>
            </div>
            <div className="row">
              <div className="col col-4 review-label review-label--small">Account Number</div>
              <div className="col col-8 review-selection">{data.directDeposit.accountNumber}</div>
            </div>
            <div className="row">
              <div className="col col-4 review-label review-label--small">Account Type</div>
              <div className="col col-8 review-selection">{data.directDeposit.accountType}</div>
            </div>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewRoyalties)

// <div className="row row--review-flex">
//   <div className="col col-4 review-label">Royalty Address</div>
//   <div className="col col-8 review-selection">
//     <div>{data.residentAddress.country}</div>
//     <div>{data.residentAddress.addressOne}</div>
//     <div>{data.residentAddress.addressTwo}</div>
//     <div>{data.residentAddress.city}, {data.residentAddress.state} {data.residentAddress.zip}</div>
//   </div>
// </div>
