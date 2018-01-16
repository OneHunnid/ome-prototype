import React from 'react'

class FullName extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Name</div>
        <div className="form-group__description">Must appear as it does on your tax returns.</div>
        <div className="row">
          <input className="col col-4 js-first-name" placeholder="First" />
          <input className="col col-2 js-middle-name" placeholder="Middle" />
          <input className="col col-4 js-last-name" placeholder="Last" />
          <select className="col col-2 js-suffix">
            <option disabled selected>Suffix</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>Junior</option>
            <option>Senior</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FullName
