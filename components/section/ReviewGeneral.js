import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewGeneral extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props
    const data = application.generalObj

    if (data.completed !== true) {
      return null
    } else {
      return (
        <section className="app__review card card--default" id="review-membership">
          <div className="review-edit">edit</div>
          <div className="row">
            <div className="col col-4 review-label">Member of PRO</div>
            <div className="col col-8 review-selection">{application.proQuestion}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Name</div>
            <div className="col col-8 review-selection">{data.name.firstName} {data.name.middleName} {data.name.lastName} {data.name.suffix}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Date of Birth</div>
            <div className="col col-8 review-selection">{data.dateOfBirth.month} {data.dateOfBirth.day} {data.dateOfBirth.year}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">U.S Citizen for Tax</div>
            <div className="col col-8 review-selection">{data.usResidentForTax}</div>
          </div>
          <div className="row row--review-flex">
            <div className="col col-4 review-label">Resident Address</div>
            <div className="col col-8 review-selection">
              <div>{data.residentAddress.country}</div>
              <div>{data.residentAddress.addressOne}</div>
              <div>{data.residentAddress.addressTwo}</div>
              <div>{data.residentAddress.city}, {data.residentAddress.state} {data.residentAddress.zip}</div>
            </div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Tax ID</div>
            <div className="col col-8 review-selection">{data.taxId}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Phone Number</div>
            <div className="col col-8 review-selection">{data.phone.country} {data.phone.number}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Email</div>
            <div className="col col-8 review-selection">{data.email}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Genre</div>
            <div className="col col-8 review-selection">{data.genre}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Stage Name</div>
            <div className="col col-8 review-selection">{data.stageName}</div>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewGeneral)
