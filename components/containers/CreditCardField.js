import React from 'react'
import Cleave from 'cleave.js'

class CreditCardField extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var cleave = new Cleave('.js-card-exp', {
      date: true,
      datePattern: ['m', 'y']
    });
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Pay with Card</div>
        <div className="form-group__description ">Please enter the details of the credit card you will be using</div>
        <div className="row">
          <input className="col col-12 js-card-name" placeholder="Name" />
        </div>
        <div className="row">
          <input className="col col-12 js-card-number" placeholder="Card Number" />
        </div>
        <div className="row">
          <input className="col col-6 js-card-exp" placeholder="MM/YY" />
          <input className="col col-6 js-card-cvc" placeholder="CVC" />
        </div>
      </div>
    )
  }
}

export default CreditCardField
