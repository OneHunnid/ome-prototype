import React from 'react'

class CreditCardField extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="form-group">
        <div className="form-group__label">Pay with Card</div>
        <div className="form-group__description ">Please enter the details of the credit card you will be using</div>
        <div className="row">
          <input className="col col-12" placeholder="Name" />
        </div>
        <div className="row">
          <input className="col col-12" placeholder="Card Number" />
        </div>
        <div className="row">
          <input className="col col-6" placeholder="MM/YY" />
          <input className="col col-6" placeholder="CVV" />
        </div>
      </div>
    )
  }
}

export default CreditCardField
