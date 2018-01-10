import React from 'react'

class Donate extends React.Component {
  constructor(props) {
    super(props)
  }
  __handleClick() {
    const donationFund = document.getElementById('js-donation-fund')
    donationFund.classList.toggle('showtime')
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Donate</div>
        <div className="form-group__description">Help support ASCAP initiatives by donating today!</div>
        <div className="row">
          <label className="checkbox">
            <input className="checkbox__icon" type="checkbox" onClick={this.__handleClick}/> I would like to donate to the  <a href="#">ASCAP legislative fund for the Arts</a>
          </label>
        </div>
        <div className="row donation-fund" id="js-donation-fund">
          <div className="card card--elevate col col-12">
            <div className="card__title">Donate</div>
            <div className="card__description">Help support ASCAP initiatives by donating today!</div>
            <div className="row">
              <div className="button button--option button--donation col col-4">$5</div>
              <div className="button button--option button--donation col col-4">$10</div>
              <div className="button button--option button--donation col col-4">$25</div>
            </div>
            <div className="row">
              <div className="button button--option button--donation col col-4">$50</div>
              <div className="button button--option button--donation col col-4">$100</div>
              <div className="button button--option button--donation col col-4">OTHER</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Donate
