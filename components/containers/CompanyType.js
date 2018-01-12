import React from 'react'

class CompanyType extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group company-type" id="fieldCompanyType">
        <div className="form-group__label">Company Type</div>
        <div className="form-group__description">Please choose your federal tax classification</div>
        <div className="row">
          <select className="col col-6">
            <option disabled selected>Choose a company type...</option>
            <option>Sole Proprietor</option>
            <option>C LLC</option>
            <option>S LLC</option>
            <option>Partnership LLC</option>
            <option>S Corporation</option>
            <option>C Corporation</option>
            <option>Trustee</option>
            <option>Partnership</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    )
  }
}

export default CompanyType
