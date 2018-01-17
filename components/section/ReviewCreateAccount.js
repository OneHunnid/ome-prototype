import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class ReviewCreateAccount extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { application } = this.props
    const data = application.createAccountObj

    if (data.completed !== true) {
      return null
    } else {
      return (
        <section className="app__review card card--default" id="review-membership">
          <div className="row">
            <div className="col col-4 review-label">Username</div>
            <div className="col col-8 review-selection">{data.username}</div>
          </div>
          <div className="row">
            <div className="col col-4 review-label">Password</div>
            <div className="col col-8 review-selection">{data.password}</div>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ application }) => ({ application })

export default connect(mapStateToProps, null)(ReviewCreateAccount)
