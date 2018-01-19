import React from 'react'

class StageName extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Stage Name</div>
        <div className="form-group__description">Enter any stage names, aliases or alternte names you use.</div>
        <div className="row">
          <input className="col col-6 js-stage-name" placeholder="Stage Name"/>
        </div>
        <div className="button-add add-address-button js-add-address-button showtime" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add Another
        </div>
      </div>
    )
  }
}

export default StageName
