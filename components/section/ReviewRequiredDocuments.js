import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewRequiredDocuments extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props
    const data = application.requiredDocumentsObj

    if (data.completed !== true) {
      return null
    } else {
      return (
        <section className="app__review card card--default" id="review-membership">
          <div className="row">
            <div className="col col-4 review-label">Backup Witholdings</div>
            <div className="col col-8 review-selection">{data.backupWitholdings}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Tax Certificate Agreement</div>
            <div className="col col-8 review-selection">{data.taxAgreement}</div>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewRequiredDocuments)
