import React from 'react'

class DirectDeposit extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleClickShowtime() {
    const cardElement = document.getElementById('js-card-royalties')
    cardElement.classList.toggle('showtime')
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Would you like to enroll in direct deposit?</div>
        <div className="form-group__description">This is the quickest way to receive your royalties. <a href="">Terms and Conditions</a></div>
        <div className="row">
          <label className="checkbox js-checkbox-royalties">
            <input className="checkbox__icon" type="checkbox" onClick={this.__handleClickShowtime}/> Yes, I would like to enroll in direct depsit
          </label>
        </div>
        <div className="row card-bank-account" id="js-card-royalties">
          <div className="card card--elevate col col-8">
            <div className="card__title">Bank Account</div>
            <div className="card__description">Enter in your bank account details. Routing and Account Numbers are on the bottom of checks…for those of us who still use checks.</div>
            <div className="row"><input className="col col-12" placeholder="Name of Account Holder"/></div>
            <div className="row"><input className="col col-12" placeholder="Bank Name"/></div>
            <div className="row"><input className="col col-12" placeholder="Routing Number"/></div>
            <div className="row"><input className="col col-12" placeholder="Account Number"/></div>
            <div className="row">
              <select className="col col-12">
                <option>Bank Account Type</option>
                <option>Checking</option>
                <option>Savings</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DirectDeposit
