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
      </div>
    )
  }
}

export default StageName
