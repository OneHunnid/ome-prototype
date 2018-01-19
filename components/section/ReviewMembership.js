import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewMembership extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props

    return (
      <section className="app__review card card--default" id="review-membership">
        <div className="review-edit">edit</div>
        <div className="row">
          <div className="col col-4 review-label">Membership</div>
          <div className="col col-8 review-selection">{application.membership}</div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewMembership)
